define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/charts_flutter/flutter', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__charts_flutter__flutter, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const selection_model = packages__charts_common__common.src__chart__common__selection_model__selection_model;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const selection_model_config = packages__charts_flutter__flutter.src__selection_model_config;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const selection_callback_example = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $add = dartx.add;
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(selection_callback_example.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(selection_callback_example.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [selection_callback_example.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [selection_callback_example.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let IdentityMapOfString$num = () => (IdentityMapOfString$num = dart.constFn(_js_helper.IdentityMap$(core.String, core.num)))();
  let SeriesDatumToNull = () => (SeriesDatumToNull = dart.constFn(dart.fnType(core.Null, [series_datum.SeriesDatum])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  let SelectionModelConfigOfDateTime = () => (SelectionModelConfigOfDateTime = dart.constFn(selection_model_config.SelectionModelConfig$(core.DateTime)))();
  let JSArrayOfSelectionModelConfigOfDateTime = () => (JSArrayOfSelectionModelConfigOfDateTime = dart.constFn(_interceptors.JSArray$(SelectionModelConfigOfDateTime())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringAndnumToNull = () => (StringAndnumToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.num])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 20,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionModels",
        [_Location_column]: 13,
        [_Location_line]: 172,
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
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 169,
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
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 185,
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
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 185,
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
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 188,
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
        [_Location_column]: 24,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_callback_example.dart"
      });
    }
  });
  const seriesList$ = dart.privateName(selection_callback_example, "SelectionCallbackExample.seriesList");
  const animate$ = dart.privateName(selection_callback_example, "SelectionCallbackExample.animate");
  selection_callback_example.SelectionCallbackExample = class SelectionCallbackExample extends framework.StatefulWidget {
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
      return new selection_callback_example.SelectionCallbackExample.new(selection_callback_example.SelectionCallbackExample._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_callback_example.SelectionCallbackExample.new(selection_callback_example.SelectionCallbackExample._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let usData = JSArrayOfTimeSeriesSales().of([new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      let ukData = JSArrayOfTimeSeriesSales().of([new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "US Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: usData}), SeriesOfTimeSeriesSales$DateTime().new({id: "UK Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: ukData})]);
    }
    createState() {
      return new selection_callback_example._SelectionCallbackState.new();
    }
    static _createSampleData() {
      let usData = JSArrayOfTimeSeriesSales().of([new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 5), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 25), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 78), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 54)]);
      let ukData = JSArrayOfTimeSeriesSales().of([new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 15), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 33), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 68), new selection_callback_example.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 48)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "US Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: usData}), SeriesOfTimeSeriesSales$DateTime().new({id: "UK Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: ukData})]);
    }
  };
  (selection_callback_example.SelectionCallbackExample.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    selection_callback_example.SelectionCallbackExample.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_callback_example.SelectionCallbackExample.prototype;
  dart.addTypeTests(selection_callback_example.SelectionCallbackExample);
  dart.setMethodSignature(selection_callback_example.SelectionCallbackExample, () => ({
    __proto__: dart.getMethods(selection_callback_example.SelectionCallbackExample.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(selection_callback_example.SelectionCallbackExample, "package:example/behaviors/selection_callback_example.dart");
  dart.setFieldSignature(selection_callback_example.SelectionCallbackExample, () => ({
    __proto__: dart.getFields(selection_callback_example.SelectionCallbackExample.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const _time = dart.privateName(selection_callback_example, "_time");
  const _measures = dart.privateName(selection_callback_example, "_measures");
  const _onSelectionChanged = dart.privateName(selection_callback_example, "_onSelectionChanged");
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
  let C20;
  let C19;
  selection_callback_example._SelectionCallbackState = class _SelectionCallbackState extends framework.State$(selection_callback_example.SelectionCallbackExample) {
    [_onSelectionChanged](model) {
      let selectedDatum = model.selectedDatum;
      let time = null;
      let measures = new (IdentityMapOfString$num()).new();
      if (dart.test(selectedDatum[$isNotEmpty])) {
        time = core.DateTime._check(dart.dload(selectedDatum[$first].datum, 'time'));
        selectedDatum[$forEach](dart.fn(datumPair => {
          measures[$_set](datumPair.series.displayName, core.num._check(dart.dload(datumPair.datum, 'sales')));
        }, SeriesDatumToNull()));
      }
      this.setState(dart.fn(() => {
        this[_time] = time;
        this[_measures] = measures;
      }, VoidToNull()));
    }
    build(context) {
      let t0;
      let children = JSArrayOfWidget().of([new basic.SizedBox.new({height: 150.0, child: new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.widget.seriesList), {animate: this.widget.animate, selectionModels: JSArrayOfSelectionModelConfigOfDateTime().of([new (SelectionModelConfigOfDateTime()).new({type: selection_model.SelectionModelType.info, changedListener: dart.bind(this, _onSelectionChanged)})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]);
      if (this[_time] != null) {
        children[$add](new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text.Text.new(dart.toString(this[_time]), {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
      }
      t0 = this[_measures];
      t0 == null ? null : t0[$forEach](dart.fn((series, value) => {
        children[$add](new text.Text.new(dart.str(series) + ": " + dart.str(value), {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}));
      }, StringAndnumToNull()));
      return new basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
  };
  (selection_callback_example._SelectionCallbackState.new = function() {
    this[_time] = null;
    this[_measures] = null;
    selection_callback_example._SelectionCallbackState.__proto__.new.call(this);
    ;
  }).prototype = selection_callback_example._SelectionCallbackState.prototype;
  dart.addTypeTests(selection_callback_example._SelectionCallbackState);
  dart.setMethodSignature(selection_callback_example._SelectionCallbackState, () => ({
    __proto__: dart.getMethods(selection_callback_example._SelectionCallbackState.__proto__),
    [_onSelectionChanged]: dart.fnType(dart.dynamic, [selection_model.SelectionModel]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(selection_callback_example._SelectionCallbackState, "package:example/behaviors/selection_callback_example.dart");
  dart.setFieldSignature(selection_callback_example._SelectionCallbackState, () => ({
    __proto__: dart.getFields(selection_callback_example._SelectionCallbackState.__proto__),
    [_time]: dart.fieldType(core.DateTime),
    [_measures]: dart.fieldType(core.Map$(core.String, core.num))
  }));
  const time$ = dart.privateName(selection_callback_example, "TimeSeriesSales.time");
  const sales$ = dart.privateName(selection_callback_example, "TimeSeriesSales.sales");
  selection_callback_example.TimeSeriesSales = class TimeSeriesSales extends core.Object {
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
  (selection_callback_example.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = selection_callback_example.TimeSeriesSales.prototype;
  dart.addTypeTests(selection_callback_example.TimeSeriesSales);
  dart.setLibraryUri(selection_callback_example.TimeSeriesSales, "package:example/behaviors/selection_callback_example.dart");
  dart.setFieldSignature(selection_callback_example.TimeSeriesSales, () => ({
    __proto__: dart.getFields(selection_callback_example.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/selection_callback_example", {
    "package:example/behaviors/selection_callback_example.dart": selection_callback_example
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_callback_example.dart"],"names":[],"mappings":"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","file":"selection_callback_example.ddc.js"}');
  // Exports:
  return {
    behaviors__selection_callback_example: selection_callback_example
  };
});

//# sourceMappingURL=selection_callback_example.ddc.js.map
