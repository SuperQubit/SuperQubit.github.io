define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/flutter/gestures', 'packages/charts_flutter/flutter', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__flutter__gestures, packages__charts_flutter__flutter, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const slider = packages__charts_common__common.src__chart__common__behavior__slider__slider;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const binding = packages__flutter__gestures.src__scheduler__binding;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const slider$ = packages__charts_flutter__flutter.src__behaviors__slider__slider;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const slider$0 = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(slider$0.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(slider$0.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [slider$0.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(slider$0.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 20,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 13,
        [_Location_line]: 161,
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
        [_Location_column]: 22,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 131,
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
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 65,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/slider.dart"
      });
    }
  });
  const seriesList$ = dart.privateName(slider$0, "SliderLine.seriesList");
  const animate$ = dart.privateName(slider$0, "SliderLine.animate");
  slider$0.SliderLine = class SliderLine extends framework.StatefulWidget {
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
      return new slider$0.SliderLine.new(slider$0.SliderLine._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new slider$0.SliderLine.new(slider$0.SliderLine._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new slider$0.LinearSales.new(0, random.nextInt(100)), new slider$0.LinearSales.new(1, random.nextInt(100)), new slider$0.LinearSales.new(2, random.nextInt(100)), new slider$0.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    createState() {
      return new slider$0._SliderCallbackState.new();
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new slider$0.LinearSales.new(0, 5), new slider$0.LinearSales.new(1, 25), new slider$0.LinearSales.new(2, 100), new slider$0.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (slider$0.SliderLine.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    slider$0.SliderLine.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = slider$0.SliderLine.prototype;
  dart.addTypeTests(slider$0.SliderLine);
  dart.setMethodSignature(slider$0.SliderLine, () => ({
    __proto__: dart.getMethods(slider$0.SliderLine.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(slider$0.SliderLine, "package:example/behaviors/slider.dart");
  dart.setFieldSignature(slider$0.SliderLine, () => ({
    __proto__: dart.getFields(slider$0.SliderLine.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const _sliderDomainValue = dart.privateName(slider$0, "_sliderDomainValue");
  const _sliderDragState = dart.privateName(slider$0, "_sliderDragState");
  const _sliderPosition = dart.privateName(slider$0, "_sliderPosition");
  const _onSliderChange = dart.privateName(slider$0, "_onSliderChange");
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
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  slider$0._SliderCallbackState = class _SliderCallbackState extends framework.State$(slider$0.SliderLine) {
    [_onSliderChange](point, domain, roleId, dragState) {
      const rebuild = _ => {
        this.setState(dart.fn(() => {
          this[_sliderDomainValue] = core.num._check(dart.dsend(dart.dsend(dart.dsend(domain, '*', [10]), 'round', []), '/', [10]));
          this[_sliderDragState] = dart.toString(dragState);
          this[_sliderPosition] = point;
        }, VoidToNull()));
      };
      dart.fn(rebuild, dynamicTovoid());
      binding.SchedulerBinding.instance.addPostFrameCallback(rebuild);
    }
    build(context) {
      let children = JSArrayOfWidget().of([new basic.SizedBox.new({height: 150.0, child: new line_chart.LineChart.new(this.widget.seriesList, {animate: this.widget.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([slider$.Slider.new({initialDomainValue: 1.0, onChangeCallback: dart.bind(this, _onSliderChange)})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]);
      if (this[_sliderDomainValue] != null) {
        children[$add](new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text.Text.new("Slider domain value: " + dart.str(this[_sliderDomainValue]), {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
      }
      if (this[_sliderPosition] != null) {
        children[$add](new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text.Text.new("Slider position: " + dart.str(this[_sliderPosition].x) + ", " + dart.str(this[_sliderPosition].y), {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}));
      }
      if (this[_sliderDragState] != null) {
        children[$add](new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text.Text.new("Slider drag state: " + dart.str(this[_sliderDragState]), {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}));
      }
      return new basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (slider$0._SliderCallbackState.new = function() {
    this[_sliderDomainValue] = null;
    this[_sliderDragState] = null;
    this[_sliderPosition] = null;
    slider$0._SliderCallbackState.__proto__.new.call(this);
    ;
  }).prototype = slider$0._SliderCallbackState.prototype;
  dart.addTypeTests(slider$0._SliderCallbackState);
  dart.setMethodSignature(slider$0._SliderCallbackState, () => ({
    __proto__: dart.getMethods(slider$0._SliderCallbackState.__proto__),
    [_onSliderChange]: dart.fnType(dart.dynamic, [math.Point$(core.int), dart.dynamic, core.String, slider.SliderListenerDragState]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(slider$0._SliderCallbackState, "package:example/behaviors/slider.dart");
  dart.setFieldSignature(slider$0._SliderCallbackState, () => ({
    __proto__: dart.getFields(slider$0._SliderCallbackState.__proto__),
    [_sliderDomainValue]: dart.fieldType(core.num),
    [_sliderDragState]: dart.fieldType(core.String),
    [_sliderPosition]: dart.fieldType(math.Point$(core.int))
  }));
  const year$ = dart.privateName(slider$0, "LinearSales.year");
  const sales$ = dart.privateName(slider$0, "LinearSales.sales");
  slider$0.LinearSales = class LinearSales extends core.Object {
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
  (slider$0.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = slider$0.LinearSales.prototype;
  dart.addTypeTests(slider$0.LinearSales);
  dart.setLibraryUri(slider$0.LinearSales, "package:example/behaviors/slider.dart");
  dart.setFieldSignature(slider$0.LinearSales, () => ({
    __proto__: dart.getFields(slider$0.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/slider", {
    "package:example/behaviors/slider.dart": slider$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["slider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmC4B;;;;;;IACf;;;;;;;;AAMT,YAAW,6BACT,mDAES;IAEb;;;AAOE,YAAW,6BAAW;IACxB;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,6BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6BAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;AAMuC,YAAI;IAAsB;;AAIzD,iBAAO,2BACP,6BAAY,GAAG,IACf,6BAAY,GAAG,KACf,6BAAY,GAAG,MACf,6BAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;sCA/DgB;QAAkB;;IAAlB;IAAkB;AAAlC;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAwEhB,OAAe,QAAe,QACtB;AAEjC,YAAK,UAAQ;AAKT,QAJF,cAAS;AACwC,qCAA/C,gBAA2C,WAAR,WAAN,WAAP,MAAM,QAAG,0BAAc;AACN,UAAvC,yBAA6B,cAAV,SAAS;AACL,UAAvB,wBAAkB,KAAK;;;;AAI4B,MAAtC,AAAS,uDAAqB,OAAO;IACxD;UAG0B;AAElB,qBAAmB,sBACnB,gCACQ,cACG,6BACT,AAAO,kCACE,AAAO,gCA4BL,4CACL,wCACoB,iCAAuB;AAMzD,UAAI,4BAAsB;AAGyC,QAFjE,AAAS,QAAD,OAAS,gCACA,sCAAqB,cACvB,kBAAK,AAA0C,mCAAnB;;AAE7C,UAAI,yBAAmB;AAImD,QAHxE,AAAS,QAAD,OAAS,gCACA,sCAAqB,cACvB,kBACP,AAA6D,+BAAzC,AAAgB,2BAAE,gBAAI,AAAgB;;AAEpE,UAAI,0BAAoB;AAGuC,QAF7D,AAAS,QAAD,OAAS,gCACA,sCAAqB,cACvB,kBAAK,AAAsC,iCAAjB;;AAG3C,YAAW,iCAAiB,QAAQ;IACtC;;;IAjFI;IACG;IACI;;;EAgFb;;;;;;;;;;;;;;;;;IAIY;;;;;;IACA;;;;;;;uCAEO,MAAW;IAAX;IAAW;;EAAM","file":"slider.ddc.js"}');
  // Exports:
  return {
    behaviors__slider: slider$0
  };
});

//# sourceMappingURL=slider.ddc.js.map
