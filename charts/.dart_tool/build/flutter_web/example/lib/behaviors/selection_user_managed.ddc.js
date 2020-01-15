define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/charts_flutter/flutter', 'packages/flutter/material'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__charts_flutter__flutter, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const selection_model = packages__charts_common__common.src__chart__common__selection_model__selection_model;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const user_managed_state = packages__charts_flutter__flutter.src__user_managed_state;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const selection_model_config = packages__charts_flutter__flutter.src__selection_model_config;
  const initial_selection = packages__charts_flutter__flutter.src__behaviors__initial_selection;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const material_button = packages__flutter__material.src__material__material_button;
  const selection_user_managed = Object.create(dart.library);
  const $_set = dartx._set;
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(selection_user_managed.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(selection_user_managed.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [selection_user_managed.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [selection_user_managed.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [selection_user_managed.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let UserManagedStateOfString = () => (UserManagedStateOfString = dart.constFn(user_managed_state.UserManagedState$(core.String)))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let SelectionModelConfigOfString = () => (SelectionModelConfigOfString = dart.constFn(selection_model_config.SelectionModelConfig$(core.String)))();
  let JSArrayOfSelectionModelConfigOfString = () => (JSArrayOfSelectionModelConfigOfString = dart.constFn(_interceptors.JSArray$(SelectionModelConfigOfString())))();
  let SeriesDatumConfigOfString = () => (SeriesDatumConfigOfString = dart.constFn(series_datum.SeriesDatumConfig$(core.String)))();
  let JSArrayOfSeriesDatumConfig = () => (JSArrayOfSeriesDatumConfig = dart.constFn(_interceptors.JSArray$(series_datum.SeriesDatumConfig)))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let UserManagedSelectionModelOfString = () => (UserManagedSelectionModelOfString = dart.constFn(user_managed_state.UserManagedSelectionModel$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 14,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionModels",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userManagedState",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_user_managed.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_user_managed.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_user_managed.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 47,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_user_managed.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_user_managed.dart"
      });
    }
  });
  const seriesList$ = dart.privateName(selection_user_managed, "SelectionUserManaged.seriesList");
  const animate$ = dart.privateName(selection_user_managed, "SelectionUserManaged.animate");
  selection_user_managed.SelectionUserManaged = class SelectionUserManaged extends framework.StatefulWidget {
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
      return new selection_user_managed.SelectionUserManaged.new(selection_user_managed.SelectionUserManaged._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_user_managed.SelectionUserManaged.new(selection_user_managed.SelectionUserManaged._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new selection_user_managed.OrdinalSales.new("2014", random.nextInt(100)), new selection_user_managed.OrdinalSales.new("2015", random.nextInt(100)), new selection_user_managed.OrdinalSales.new("2016", random.nextInt(100)), new selection_user_managed.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new selection_user_managed.OrdinalSales.new("2014", 5), new selection_user_managed.OrdinalSales.new("2015", 25), new selection_user_managed.OrdinalSales.new("2016", 100), new selection_user_managed.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    createState() {
      return new selection_user_managed.SelectionUserManagedState.new();
    }
  };
  (selection_user_managed.SelectionUserManaged.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    selection_user_managed.SelectionUserManaged.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_user_managed.SelectionUserManaged.prototype;
  dart.addTypeTests(selection_user_managed.SelectionUserManaged);
  dart.setMethodSignature(selection_user_managed.SelectionUserManaged, () => ({
    __proto__: dart.getMethods(selection_user_managed.SelectionUserManaged.__proto__),
    createState: dart.fnType(selection_user_managed.SelectionUserManagedState, [])
  }));
  dart.setLibraryUri(selection_user_managed.SelectionUserManaged, "package:example/behaviors/selection_user_managed.dart");
  dart.setFieldSignature(selection_user_managed.SelectionUserManaged, () => ({
    __proto__: dart.getFields(selection_user_managed.SelectionUserManaged.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const _myState = dart.privateName(selection_user_managed, "_myState");
  const _infoSelectionModelUpdated = dart.privateName(selection_user_managed, "_infoSelectionModelUpdated");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C1;
  let C0;
  const _handleClearSelection = dart.privateName(selection_user_managed, "_handleClearSelection");
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  selection_user_managed.SelectionUserManagedState = class SelectionUserManagedState extends framework.State$(selection_user_managed.SelectionUserManaged) {
    build(context) {
      let chart = new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.widget.seriesList), {animate: false, selectionModels: JSArrayOfSelectionModelConfigOfString().of([new (SelectionModelConfigOfString()).new({type: selection_model.SelectionModelType.info, updatedListener: dart.bind(this, _infoSelectionModelUpdated)})]), userManagedState: this[_myState], behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new initial_selection.InitialSelection.new({selectedDataConfig: JSArrayOfSeriesDatumConfig().of([new (SeriesDatumConfigOfString()).new("Sales", "2016")])})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      let clearSelection = new material_button.MaterialButton.new({onPressed: dart.bind(this, _handleClearSelection), child: new text.Text.new("Clear Selection", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      return new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({child: chart, height: 150.0, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), clearSelection]), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
    [_infoSelectionModelUpdated](model) {
      this[_myState].selectionModels[$_set](selection_model.SelectionModelType.info, new (UserManagedSelectionModelOfString()).new({model: model}));
    }
    [_handleClearSelection]() {
      this.setState(dart.fn(() => {
        this[_myState].selectionModels[$_set](selection_model.SelectionModelType.info, new (UserManagedSelectionModelOfString()).new());
      }, VoidToNull()));
    }
  };
  (selection_user_managed.SelectionUserManagedState.new = function() {
    this[_myState] = new (UserManagedStateOfString()).new();
    selection_user_managed.SelectionUserManagedState.__proto__.new.call(this);
    ;
  }).prototype = selection_user_managed.SelectionUserManagedState.prototype;
  dart.addTypeTests(selection_user_managed.SelectionUserManagedState);
  dart.setMethodSignature(selection_user_managed.SelectionUserManagedState, () => ({
    __proto__: dart.getMethods(selection_user_managed.SelectionUserManagedState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_infoSelectionModelUpdated]: dart.fnType(dart.void, [selection_model.SelectionModel$(core.String)]),
    [_handleClearSelection]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(selection_user_managed.SelectionUserManagedState, "package:example/behaviors/selection_user_managed.dart");
  dart.setFieldSignature(selection_user_managed.SelectionUserManagedState, () => ({
    __proto__: dart.getFields(selection_user_managed.SelectionUserManagedState.__proto__),
    [_myState]: dart.finalFieldType(user_managed_state.UserManagedState$(core.String))
  }));
  const year$ = dart.privateName(selection_user_managed, "OrdinalSales.year");
  const sales$ = dart.privateName(selection_user_managed, "OrdinalSales.sales");
  selection_user_managed.OrdinalSales = class OrdinalSales extends core.Object {
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
  (selection_user_managed.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = selection_user_managed.OrdinalSales.prototype;
  dart.addTypeTests(selection_user_managed.OrdinalSales);
  dart.setLibraryUri(selection_user_managed.OrdinalSales, "package:example/behaviors/selection_user_managed.dart");
  dart.setFieldSignature(selection_user_managed.OrdinalSales, () => ({
    __proto__: dart.getFields(selection_user_managed.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/selection_user_managed", {
    "package:example/behaviors/selection_user_managed.dart": selection_user_managed
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_user_managed.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,qDACT,2EAES;IAEb;;;AAOE,YAAW,qDAAqB;IAClC;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;AAKQ,iBAAO,4BACP,4CAAa,QAAQ,IACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,MACrB,4CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;AAIE,YAAW;IACb;;8DAjE0B;QAAkB;;IAAlB;IAAkB;AAA5C;;EAAqD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAwE3B;AAClB,kBAAY,iEAChB,AAAO,mCACE,wBACQ,4CACX,gDACgC,oEACf,yDAIL,2BAGP,4CACL,gEAA4C,iCAC1C,sCAAiC,SAAS;AAK9C,2BAAqB,6DACZ,qCAAkC,kBAAK;AAEtD,YAAW,iCACG,sBAAK,+BAAgB,KAAK,UAAU,gEAAQ,cAAc;IAC1E;iCAE8D;AASN,MADtD,AAAS,AAAe,sCAA2B,yCAC3C,sDAAwC,KAAK;IACvD;;AASI,MAHF,cAAS;AAEmC,QAD1C,AAAS,AAAe,sCAA2B,yCAC3C;;IAEZ;;;IAnDM,iBAAe;;;EAoDvB;;;;;;;;;;;;;;;;IAIe;;;;;;IACH;;;;;;;sDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"selection_user_managed.ddc.js"}');
  // Exports:
  return {
    behaviors__selection_user_managed: selection_user_managed
  };
});

//# sourceMappingURL=selection_user_managed.ddc.js.map
