define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/logging/logging', 'packages/flutter/gestures', 'packages/flutter/src/semantics/binding', 'packages/collection/src/comparators', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__logging__logging, packages__flutter__gestures, packages__flutter__src__semantics__binding, packages__collection__src__comparators, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const line_style = packages__charts_common__common.src__common__line_style;
  const color$ = packages__charts_common__common.src__common__color;
  const cartesian_chart = packages__charts_common__common.src__chart__cartesian__cartesian_chart;
  const axis = packages__charts_common__common.src__chart__cartesian__axis__axis;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const performance = packages__charts_common__common.src__common__performance;
  const base_chart = packages__charts_common__common.src__chart__common__base_chart;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const selection_trigger = packages__charts_common__common.src__chart__common__behavior__selection__selection_trigger;
  const selection_model = packages__charts_common__common.src__chart__common__selection_model__selection_model;
  const series = packages__charts_common__common.src__data__series;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const rtl_spec = packages__charts_common__common.src__common__rtl_spec;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const processed_series = packages__charts_common__common.src__chart__common__processed_series;
  const layout_config = packages__charts_common__common.src__chart__layout__layout_config;
  const date_time_factory = packages__charts_common__common.src__common__date_time_factory;
  const a11y_node = packages__charts_common__common.src__chart__common__behavior__a11y__a11y_node;
  const chart_context = packages__charts_common__common.src__chart__common__chart_context;
  const proxy_gesture_listener = packages__charts_common__common.src__common__proxy_gesture_listener;
  const time_series_chart = packages__charts_common__common.src__chart__time_series__time_series_chart;
  const line_point_highlighter = packages__charts_common__common.src__chart__common__behavior__line_point_highlighter;
  const symbol_renderer = packages__charts_common__common.src__common__symbol_renderer;
  const graphics_factory = packages__charts_common__common.src__common__graphics_factory;
  const text_style = packages__charts_common__common.src__common__text_style;
  const text_element = packages__charts_common__common.src__common__text_element;
  const text_measurement = packages__charts_common__common.src__common__text_measurement;
  const chart_canvas = packages__charts_common__common.src__chart__common__chart_canvas;
  const style_factory = packages__charts_common__common.src__common__style__style_factory;
  const canvas_shapes = packages__charts_common__common.src__chart__common__canvas_shapes;
  const select_nearest = packages__charts_common__common.src__chart__common__behavior__selection__select_nearest;
  const sliding_viewport = packages__charts_common__common.src__chart__common__behavior__sliding_viewport;
  const series_legend = packages__charts_common__common.src__chart__common__behavior__legend__series_legend;
  const legend_entry = packages__charts_common__common.src__chart__common__behavior__legend__legend_entry;
  const legend = packages__charts_common__common.src__chart__common__behavior__legend__legend;
  const scatter_plot_chart = packages__charts_common__common.src__chart__scatter_plot__scatter_plot_chart;
  const pie_chart = packages__charts_common__common.src__chart__pie__pie_chart;
  const line_chart = packages__charts_common__common.src__chart__line__line_chart;
  const pan_behavior = packages__charts_common__common.src__chart__common__behavior__zoom__pan_behavior;
  const pan_and_zoom_behavior = packages__charts_common__common.src__chart__common__behavior__zoom__pan_and_zoom_behavior;
  const initial_hint_behavior = packages__charts_common__common.src__chart__common__behavior__zoom__initial_hint_behavior;
  const slider = packages__charts_common__common.src__chart__common__behavior__slider__slider;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const range_annotation = packages__charts_common__common.src__chart__common__behavior__range_annotation;
  const legend_entry_generator = packages__charts_common__common.src__chart__common__behavior__legend__legend_entry_generator;
  const datum_legend = packages__charts_common__common.src__chart__common__behavior__legend__datum_legend;
  const chart_title = packages__charts_common__common.src__chart__common__behavior__chart_title__chart_title;
  const percent_injector = packages__charts_common__common.src__chart__common__behavior__calculation__percent_injector;
  const initial_selection = packages__charts_common__common.src__chart__common__behavior__initial_selection;
  const domain_highlighter = packages__charts_common__common.src__chart__common__behavior__domain_highlighter;
  const a11y_explore_behavior = packages__charts_common__common.src__chart__common__behavior__a11y__a11y_explore_behavior;
  const domain_a11y_explore_behavior = packages__charts_common__common.src__chart__common__behavior__a11y__domain_a11y_explore_behavior;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const bar_chart = packages__charts_common__common.src__chart__bar__bar_chart;
  const bar_renderer_decorator = packages__charts_common__common.src__chart__bar__bar_renderer_decorator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const table = packages__flutter__src__widgets__actions.src__widgets__table;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const custom_layout = packages__flutter__src__rendering__animated_size.src__rendering__custom_layout;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const table$ = packages__flutter__src__rendering__animated_size.src__rendering__table;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const scale = packages__flutter__src__gestures__arena.src__gestures__scale;
  const logging = packages__logging__logging.logging;
  const binding = packages__flutter__gestures.src__scheduler__binding;
  const semantics_service = packages__flutter__src__semantics__binding.src__semantics__semantics_service;
  const semantics = packages__flutter__src__semantics__binding.src__semantics__semantics;
  const equality = packages__collection__src__comparators.src__equality;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style$ = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const theme = packages__flutter__material.src__material__theme;
  const line_style$ = Object.create(dart.library);
  const cartesian_chart$ = Object.create(dart.library);
  const user_managed_state = Object.create(dart.library);
  const selection_model_config = Object.create(dart.library);
  const base_chart$ = Object.create(dart.library);
  const base_chart_state = Object.create(dart.library);
  const widget_layout_delegate = Object.create(dart.library);
  const chart_behavior$ = Object.create(dart.library);
  const chart_gesture_detector = Object.create(dart.library);
  const util = Object.create(dart.library);
  const chart_container = Object.create(dart.library);
  const time_series_chart$ = Object.create(dart.library);
  const line_point_highlighter$ = Object.create(dart.library);
  const graphics_factory$ = Object.create(dart.library);
  const text_style$0 = Object.create(dart.library);
  const text_element$ = Object.create(dart.library);
  const chart_state = Object.create(dart.library);
  const chart_canvas$ = Object.create(dart.library);
  const polygon_painter = Object.create(dart.library);
  const point_painter = Object.create(dart.library);
  const pie_painter = Object.create(dart.library);
  const circle_sector_painter = Object.create(dart.library);
  const line_painter = Object.create(dart.library);
  const select_nearest$ = Object.create(dart.library);
  const sliding_viewport$ = Object.create(dart.library);
  const legend_content_builder = Object.create(dart.library);
  const legend_layout = Object.create(dart.library);
  const legend_entry_layout = Object.create(dart.library);
  const legend$ = Object.create(dart.library);
  const symbol_renderer$ = Object.create(dart.library);
  const color$0 = Object.create(dart.library);
  const combo_chart = Object.create(dart.library);
  const flutter = Object.create(dart.library);
  const scatter_plot_chart$ = Object.create(dart.library);
  const pie_chart$ = Object.create(dart.library);
  const line_chart$ = Object.create(dart.library);
  const pan_behavior$ = Object.create(dart.library);
  const pan_and_zoom_behavior$ = Object.create(dart.library);
  const initial_hint_behavior$ = Object.create(dart.library);
  const slider$ = Object.create(dart.library);
  const range_annotation$ = Object.create(dart.library);
  const series_legend$ = Object.create(dart.library);
  const datum_legend$ = Object.create(dart.library);
  const chart_title$ = Object.create(dart.library);
  const percent_injector$ = Object.create(dart.library);
  const initial_selection$ = Object.create(dart.library);
  const domain_highlighter$ = Object.create(dart.library);
  const domain_a11y_explore_behavior$ = Object.create(dart.library);
  const bar_chart$ = Object.create(dart.library);
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $reversed = dartx.reversed;
  const $where = dartx.where;
  const $insert = dartx.insert;
  const $remove = dartx.remove;
  const $add = dartx.add;
  const $any = dartx.any;
  const $keys = dartx.keys;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $first = dartx.first;
  const $left = dartx.left;
  const $toDouble = dartx.toDouble;
  const $right = dartx.right;
  const $top = dartx.top;
  const $bottom = dartx.bottom;
  const $firstWhere = dartx.firstWhere;
  const $toInt = dartx.toInt;
  const $width = dartx.width;
  const $height = dartx.height;
  const $_equals = dartx._equals;
  const $ceil = dartx.ceil;
  const $round = dartx.round;
  const $modulo = dartx['%'];
  const $addAll = dartx.addAll;
  const $hashCode = dartx.hashCode;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $sublist = dartx.sublist;
  const $fold = dartx.fold;
  const $runtimeType = dartx.runtimeType;
  const $abs = dartx.abs;
  let IdentityMapOfString$NumericAxis = () => (IdentityMapOfString$NumericAxis = dart.constFn(_js_helper.IdentityMap$(core.String, axis.NumericAxis)))();
  let StringAndNumericAxisSpecToNull = () => (StringAndNumericAxisSpecToNull = dart.constFn(dart.fnType(core.Null, [core.String, numeric_axis_spec.NumericAxisSpec])))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let ListOfChartBehaviorOfChartBehavior = () => (ListOfChartBehaviorOfChartBehavior = dart.constFn(core.List$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let ChartBehaviorOfChartBehaviorToNull = () => (ChartBehaviorOfChartBehaviorToNull = dart.constFn(dart.fnType(core.Null, [ChartBehaviorOfChartBehavior()])))();
  let VoidToChartBehaviorOfD = () => (VoidToChartBehaviorOfD = dart.constFn(dart.gFnType(D => {
    let ChartBehaviorOfD = () => (ChartBehaviorOfD = dart.constFn(chart_behavior.ChartBehavior$(D)))();
    return [ChartBehaviorOfD(), []];
  })))();
  let ChartStateBehaviorOfChartBehavior = () => (ChartStateBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior)))();
  let ChartBehaviorOfChartBehaviorTobool = () => (ChartBehaviorOfChartBehaviorTobool = dart.constFn(dart.fnType(core.bool, [ChartBehaviorOfChartBehavior()])))();
  let ListOfSelectionModelType = () => (ListOfSelectionModelType = dart.constFn(core.List$(selection_model.SelectionModelType)))();
  let SelectionModelTypeToNull = () => (SelectionModelTypeToNull = dart.constFn(dart.fnType(core.Null, [selection_model.SelectionModelType])))();
  let _HashSetOfGestureType = () => (_HashSetOfGestureType = dart.constFn(collection._HashSet$(chart_behavior$.GestureType)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfSeriesDatumConfig = () => (JSArrayOfSeriesDatumConfig = dart.constFn(_interceptors.JSArray$(series_datum.SeriesDatumConfig)))();
  let IdentityMapOfString$ChartBehavior = () => (IdentityMapOfString$ChartBehavior = dart.constFn(_js_helper.IdentityMap$(core.String, chart_behavior.ChartBehavior)))();
  let LinkedMapOfChartStateBehaviorOfChartBehavior$AnimationController = () => (LinkedMapOfChartStateBehaviorOfChartBehavior$AnimationController = dart.constFn(_js_helper.LinkedMap$(ChartStateBehaviorOfChartBehavior(), animation_controller.AnimationController)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfLayoutId = () => (JSArrayOfLayoutId = dart.constFn(_interceptors.JSArray$(basic.LayoutId)))();
  let BuildableBehaviorOfChartBehavior = () => (BuildableBehaviorOfChartBehavior = dart.constFn(chart_behavior$.BuildableBehavior$(chart_behavior.ChartBehavior)))();
  let IdentityMapOfString$BuildableBehaviorOfChartBehavior = () => (IdentityMapOfString$BuildableBehaviorOfChartBehavior = dart.constFn(_js_helper.IdentityMap$(core.String, BuildableBehaviorOfChartBehavior())))();
  let StringAndChartBehaviorToNull = () => (StringAndChartBehaviorToNull = dart.constFn(dart.fnType(core.Null, [core.String, chart_behavior.ChartBehavior])))();
  let ChartStateBehaviorOfChartBehaviorAndAnimationControllerTovoid = () => (ChartStateBehaviorOfChartBehaviorAndAnimationControllerTovoid = dart.constFn(dart.fnType(dart.void, [ChartStateBehaviorOfChartBehavior(), animation_controller.AnimationController])))();
  let VoidToChartContainerRenderObject = () => (VoidToChartContainerRenderObject = dart.constFn(dart.fnType(chart_container.ChartContainerRenderObject, [])))();
  let PointOfdouble = () => (PointOfdouble = dart.constFn(math.Point$(core.double)))();
  let RenderBoxTobool = () => (RenderBoxTobool = dart.constFn(dart.fnType(core.bool, [box.RenderBox])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let JSArrayOfA11yNode = () => (JSArrayOfA11yNode = dart.constFn(_interceptors.JSArray$(a11y_node.A11yNode)))();
  let JSArrayOfCustomPainterSemantics = () => (JSArrayOfCustomPainterSemantics = dart.constFn(_interceptors.JSArray$(custom_paint.CustomPainterSemantics)))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let PointOfnum = () => (PointOfnum = dart.constFn(math.Point$(core.num)))();
  let JSArrayOfPointOfnum = () => (JSArrayOfPointOfnum = dart.constFn(_interceptors.JSArray$(PointOfnum())))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))();
  let LegendEntryToWidget = () => (LegendEntryToWidget = dart.constFn(dart.fnType(framework.Widget, [legend_entry.LegendEntry])))();
  let WidgetToPadding = () => (WidgetToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.Widget])))();
  let JSArrayOfTableRow = () => (JSArrayOfTableRow = dart.constFn(_interceptors.JSArray$(table.TableRow)))();
  let ListOfTableRow = () => (ListOfTableRow = dart.constFn(core.List$(table.TableRow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToTableRow = () => (intToTableRow = dart.constFn(dart.fnType(table.TableRow, [core.int])))();
  let TableRowToint = () => (TableRowToint = dart.constFn(dart.fnType(core.int, [table.TableRow])))();
  let dynamicAndintTodynamic = () => (dynamicAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, core.int])))();
  let IterableOfPadding = () => (IterableOfPadding = dart.constFn(core.Iterable$(basic.Padding)))();
  let intToPadding = () => (intToPadding = dart.constFn(dart.fnType(basic.Padding, [core.int])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapUpDetails])))();
  let SeriesOfdynamic$num = () => (SeriesOfdynamic$num = dart.constFn(series.Series$(dart.dynamic, core.num)))();
  let ListOfSeriesOfdynamic$num = () => (ListOfSeriesOfdynamic$num = dart.constFn(core.List$(SeriesOfdynamic$num())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let LinkedHashSetOfGestureType = () => (LinkedHashSetOfGestureType = dart.constFn(collection.LinkedHashSet$(chart_behavior$.GestureType)))();
  let RectangleOfint = () => (RectangleOfint = dart.constFn(math.Rectangle$(core.int)))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: selection_model.SelectionModelType.prototype,
        [_name]: "SelectionModelType.info",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "oldChartWidget",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "chartWidget",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "chartState",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationValue",
        [_Location_column]: 7,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rtl",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rtlSpec",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userManagedState",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/base_chart_state.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/base_chart_state.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 39,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/base_chart_state.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 9,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 137,
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
        [_Location_column]: 16,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/base_chart_state.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_layout_delegate._HorizontalJustification.prototype,
        [_name$]: "_HorizontalJustification.leftDrawArea",
        index: 0
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_layout_delegate._HorizontalJustification.prototype,
        [_name$]: "_HorizontalJustification.left",
        index: 1
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_layout_delegate._HorizontalJustification.prototype,
        [_name$]: "_HorizontalJustification.rightDrawArea",
        index: 2
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_layout_delegate._HorizontalJustification.prototype,
        [_name$]: "_HorizontalJustification.right",
        index: 3
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.startDrawArea",
        index: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.middleDrawArea",
        index: 2
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.start",
        index: 1
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.middle",
        index: 3
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.endDrawArea",
        index: 4
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: chart_behavior.OutsideJustification.prototype,
        [_name$0]: "OutsideJustification.end",
        index: 5
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: chart_behavior.InsideJustification.prototype,
        [_name$0]: "InsideJustification.topStart",
        index: 0
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: chart_behavior.InsideJustification.prototype,
        [_name$0]: "InsideJustification.topEnd",
        index: 1
      });
    },
    get C35() {
      return C35 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_layout_delegate._HorizontalJustification);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: chart_behavior$.GestureType.prototype,
        [_name$1]: "GestureType.onLongPress",
        index: 0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: chart_behavior$.GestureType.prototype,
        [_name$1]: "GestureType.onTap",
        index: 1
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: chart_behavior$.GestureType.prototype,
        [_name$1]: "GestureType.onHover",
        index: 2
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: chart_behavior$.GestureType.prototype,
        [_name$1]: "GestureType.onDrag",
        index: 3
      });
    },
    get C40() {
      return C40 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], chart_behavior$.GestureType);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleStart",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleUpdate",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleEnd",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/chart_gesture_detector.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: rtl_spec.AxisDirection.prototype,
        [_name$2]: "AxisDirection.reversed",
        index: 1
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: rtl_spec.RTLSpec.prototype,
        [RTLSpec_axisDirection]: C51 || CT.C51
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: graphics_factory$.GraphicsFactoryHelper.prototype
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: chart_canvas.FillPatternType.prototype,
        [_name$3]: "FillPatternType.forwardHatch",
        index: 0
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: chart_canvas.FillPatternType.prototype,
        [_name$3]: "FillPatternType.solid",
        index: 1
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: selection_trigger.SelectionTrigger.prototype,
        [_name$4]: "SelectionTrigger.tap",
        index: 1
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: selection_trigger.SelectionTrigger.prototype,
        [_name$4]: "SelectionTrigger.tapAndDrag",
        index: 2
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: selection_trigger.SelectionTrigger.prototype,
        [_name$4]: "SelectionTrigger.pressHold",
        index: 3
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: selection_trigger.SelectionTrigger.prototype,
        [_name$4]: "SelectionTrigger.longPressHold",
        index: 4
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: selection_trigger.SelectionTrigger.prototype,
        [_name$4]: "SelectionTrigger.hover",
        index: 0
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: legend_entry_layout.SimpleLegendEntryLayout.prototype
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 63,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_layout.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_layout.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultColumnWidth",
        [_Location_column]: 25,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_layout.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 44,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 37,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 20,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/behaviors/legend/legend_entry_layout.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/symbol_renderer.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/charts_flutter/src/symbol_renderer.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: chart_behavior.BehaviorPosition.prototype,
        [_name$0]: "BehaviorPosition.top",
        index: 0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: legend.LegendTapHandling.prototype,
        [_name$5]: "LegendTapHandling.hide",
        index: 1
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: legend.LegendTapHandling.prototype,
        [_name$5]: "LegendTapHandling.none",
        index: 0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: a11y_explore_behavior.ExploreModeTrigger.prototype,
        [_name$6]: "ExploreModeTrigger.pressHold",
        index: 0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: a11y_explore_behavior.ExploreModeTrigger.prototype,
        [_name$6]: "ExploreModeTrigger.tap",
        index: 1
      });
    }
  });
  const color = dart.privateName(line_style$, "LineStyle.color");
  const dashPattern = dart.privateName(line_style$, "LineStyle.dashPattern");
  const strokeWidth = dart.privateName(line_style$, "LineStyle.strokeWidth");
  line_style$.LineStyle = class LineStyle extends core.Object {
    get color() {
      return this[color];
    }
    set color(value) {
      this[color] = value;
    }
    get dashPattern() {
      return this[dashPattern];
    }
    set dashPattern(value) {
      this[dashPattern] = value;
    }
    get strokeWidth() {
      return this[strokeWidth];
    }
    set strokeWidth(value) {
      this[strokeWidth] = value;
    }
  };
  (line_style$.LineStyle.new = function() {
    this[color] = null;
    this[dashPattern] = null;
    this[strokeWidth] = null;
    ;
  }).prototype = line_style$.LineStyle.prototype;
  dart.addTypeTests(line_style$.LineStyle);
  line_style$.LineStyle[dart.implements] = () => [line_style.LineStyle];
  dart.setLibraryUri(line_style$.LineStyle, "package:charts_flutter/src/line_style.dart");
  dart.setFieldSignature(line_style$.LineStyle, () => ({
    __proto__: dart.getFields(line_style$.LineStyle.__proto__),
    color: dart.fieldType(color$.Color),
    dashPattern: dart.fieldType(core.List$(core.int)),
    strokeWidth: dart.fieldType(core.int)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const _updateBehaviors = dart.privateName(base_chart$, "_updateBehaviors");
  const _updateSelectionModel = dart.privateName(base_chart$, "_updateSelectionModel");
  const _notACustomBehavior = dart.privateName(base_chart$, "_notACustomBehavior");
  const _is_BaseChart_default = Symbol('_is_BaseChart_default');
  const seriesList$ = dart.privateName(base_chart$, "BaseChart.seriesList");
  const animate$ = dart.privateName(base_chart$, "BaseChart.animate");
  const animationDuration$ = dart.privateName(base_chart$, "BaseChart.animationDuration");
  const layoutConfig$ = dart.privateName(base_chart$, "BaseChart.layoutConfig");
  const defaultRenderer$ = dart.privateName(base_chart$, "BaseChart.defaultRenderer");
  const defaultInteractions$ = dart.privateName(base_chart$, "BaseChart.defaultInteractions");
  const behaviors$ = dart.privateName(base_chart$, "BaseChart.behaviors");
  const selectionModels$ = dart.privateName(base_chart$, "BaseChart.selectionModels");
  const customSeriesRenderers$ = dart.privateName(base_chart$, "BaseChart.customSeriesRenderers");
  const rtlSpec$ = dart.privateName(base_chart$, "BaseChart.rtlSpec");
  const userManagedState$ = dart.privateName(base_chart$, "BaseChart.userManagedState");
  base_chart$.BaseChart$ = dart.generic(D => {
    let BaseChartStateOfD = () => (BaseChartStateOfD = dart.constFn(base_chart_state.BaseChartState$(D)))();
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart$.BaseChart$(D)))();
    let BaseChartOfD$ = () => (BaseChartOfD$ = dart.constFn(base_chart.BaseChart$(D)))();
    let SelectionModelOfD = () => (SelectionModelOfD = dart.constFn(selection_model.SelectionModel$(D)))();
    let SelectionModelOfDTodynamic = () => (SelectionModelOfDTodynamic = dart.constFn(dart.fnType(dart.dynamic, [SelectionModelOfD()])))();
    let MapOfSelectionModelType$SelectionModelOfDTodynamic = () => (MapOfSelectionModelType$SelectionModelOfDTodynamic = dart.constFn(core.Map$(selection_model.SelectionModelType, SelectionModelOfDTodynamic())))();
    let SelectionModelConfigOfD = () => (SelectionModelConfigOfD = dart.constFn(selection_model_config.SelectionModelConfig$(D)))();
    let SelectionModelConfigOfDToNull = () => (SelectionModelConfigOfDToNull = dart.constFn(dart.fnType(core.Null, [SelectionModelConfigOfD()])))();
    class BaseChart extends framework.StatefulWidget {
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
      get animationDuration() {
        return this[animationDuration$];
      }
      set animationDuration(value) {
        super.animationDuration = value;
      }
      get layoutConfig() {
        return this[layoutConfig$];
      }
      set layoutConfig(value) {
        super.layoutConfig = value;
      }
      get defaultRenderer() {
        return this[defaultRenderer$];
      }
      set defaultRenderer(value) {
        super.defaultRenderer = value;
      }
      get defaultInteractions() {
        return this[defaultInteractions$];
      }
      set defaultInteractions(value) {
        super.defaultInteractions = value;
      }
      get behaviors() {
        return this[behaviors$];
      }
      set behaviors(value) {
        super.behaviors = value;
      }
      get selectionModels() {
        return this[selectionModels$];
      }
      set selectionModels(value) {
        super.selectionModels = value;
      }
      get customSeriesRenderers() {
        return this[customSeriesRenderers$];
      }
      set customSeriesRenderers(value) {
        super.customSeriesRenderers = value;
      }
      get rtlSpec() {
        return this[rtlSpec$];
      }
      set rtlSpec(value) {
        super.rtlSpec = value;
      }
      get userManagedState() {
        return this[userManagedState$];
      }
      set userManagedState(value) {
        super.userManagedState = value;
      }
      createState() {
        return new (BaseChartStateOfD()).new();
      }
      updateCommonChart(chart, oldWidget, chartState) {
        let t0;
        BaseChartOfD()._check(oldWidget);
        BaseChartStateOfD()._check(chartState);
        performance.Performance.time("chartsUpdateRenderers");
        if (this.defaultRenderer != null && !dart.equals(this.defaultRenderer, (t0 = oldWidget, t0 == null ? null : t0.defaultRenderer))) {
          chart.defaultRenderer = this.defaultRenderer.build();
          chartState.markChartDirty();
        }
        if (this.customSeriesRenderers != null) {
          for (let i = 0; i < dart.notNull(this.customSeriesRenderers[$length]); i = i + 1) {
            if (oldWidget == null || oldWidget.customSeriesRenderers != null && i > dart.notNull(oldWidget.customSeriesRenderers[$length]) || !dart.equals(this.customSeriesRenderers[$_get](i), oldWidget.customSeriesRenderers[$_get](i))) {
              chart.addSeriesRenderer(this.customSeriesRenderers[$_get](i).build());
              chartState.markChartDirty();
            }
          }
        }
        performance.Performance.timeEnd("chartsUpdateRenderers");
        performance.Performance.time("chartsUpdateBehaviors");
        this[_updateBehaviors](chart, chartState);
        performance.Performance.timeEnd("chartsUpdateBehaviors");
        this[_updateSelectionModel](BaseChartOfD$()._check(chart), chartState);
        chart.transition = dart.test(this.animate) ? this.animationDuration : core.Duration.zero;
      }
      [_updateBehaviors](chart, chartState) {
        let behaviorList = this.behaviors != null ? ListOfChartBehaviorOfChartBehavior().from(this.behaviors) : JSArrayOfChartBehaviorOfChartBehavior().of([]);
        if (dart.test(this.defaultInteractions)) {
          if (dart.test(chartState.autoBehaviorWidgets[$isEmpty])) {
            this.addDefaultInteractions(chartState.autoBehaviorWidgets);
          }
          chartState.autoBehaviorWidgets[$reversed][$where](dart.bind(this, _notACustomBehavior))[$forEach](dart.fn(behavior => {
            behaviorList[$insert](0, behavior);
          }, ChartBehaviorOfChartBehaviorToNull()));
        }
        for (let i = dart.notNull(chartState.addedBehaviorWidgets[$length]) - 1; i >= 0; i = i - 1) {
          let addedBehavior = chartState.addedBehaviorWidgets[$_get](i);
          if (!dart.test(behaviorList[$remove](addedBehavior))) {
            let role = addedBehavior.role;
            chartState.addedBehaviorWidgets[$remove](addedBehavior);
            chartState.addedCommonBehaviorsByRole[$remove](role);
            chart.removeBehavior(chartState.addedCommonBehaviorsByRole[$_get](role));
            chartState.markChartDirty();
          }
        }
        behaviorList[$forEach](dart.fn(behaviorWidget => {
          let commonBehavior = chart.createBehavior(dart.fn(D => chart_behavior.ChartBehavior$(D)._check(behaviorWidget.createCommonBehavior(D)), VoidToChartBehaviorOfD()));
          if (ChartStateBehaviorOfChartBehavior().is(commonBehavior)) {
            ChartStateBehaviorOfChartBehavior().as(commonBehavior).chartState = chartState;
          }
          chart.addBehavior(commonBehavior);
          chartState.addedBehaviorWidgets[$add](behaviorWidget);
          chartState.addedCommonBehaviorsByRole[$_set](behaviorWidget.role, commonBehavior);
          chartState.markChartDirty();
        }, ChartBehaviorOfChartBehaviorToNull()));
      }
      addDefaultInteractions(behaviors) {
        behaviors[$add](select_nearest$.SelectNearest.new({eventTrigger: selection_trigger.SelectionTrigger.tap, selectionModelType: selection_model.SelectionModelType.info, expandToDomain: true, selectClosestSeries: true}));
      }
      [_notACustomBehavior](behavior) {
        return this.behaviors == null || !dart.test(this.behaviors[$any](dart.fn(userBehavior => userBehavior.role == behavior.role, ChartBehaviorOfChartBehaviorTobool())));
      }
      [_updateSelectionModel](chart, chartState) {
        let t0;
        let prevTypes = ListOfSelectionModelType().from(MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionChangedListenersByType)[$keys]);
        t0 = this.selectionModels;
        t0 == null ? null : t0[$forEach](dart.fn(model => {
          let selectionModel = chart.getSelectionModel(model.type);
          let prevChangedListener = MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionChangedListenersByType)[$_get](model.type);
          if (SelectionModelOfDTodynamic()._check(model.changedListener) != prevChangedListener) {
            selectionModel.removeSelectionChangedListener(prevChangedListener);
            selectionModel.addSelectionChangedListener(SelectionModelOfDTodynamic()._check(model.changedListener));
            MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionChangedListenersByType)[$_set](model.type, SelectionModelOfDTodynamic()._check(model.changedListener));
          }
          let prevUpdatedListener = MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionUpdatedListenersByType)[$_get](model.type);
          if (SelectionModelOfDTodynamic()._check(model.updatedListener) != prevUpdatedListener) {
            selectionModel.removeSelectionUpdatedListener(prevUpdatedListener);
            selectionModel.addSelectionUpdatedListener(SelectionModelOfDTodynamic()._check(model.updatedListener));
            MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionUpdatedListenersByType)[$_set](model.type, SelectionModelOfDTodynamic()._check(model.updatedListener));
          }
          prevTypes[$remove](model.type);
        }, SelectionModelConfigOfDToNull()));
        prevTypes[$forEach](dart.fn(type => {
          let t0;
          t0 = chart.getSelectionModel(type);
          t0.removeSelectionChangedListener(MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionChangedListenersByType)[$_get](type));
          t0.removeSelectionUpdatedListener(MapOfSelectionModelType$SelectionModelOfDTodynamic()._check(chartState.addedSelectionUpdatedListenersByType)[$_get](type));
          t0;
        }, SelectionModelTypeToNull()));
      }
      getDesiredGestures(chartState) {
        let t0;
        let types = new (_HashSetOfGestureType()).new();
        t0 = this.behaviors;
        t0 == null ? null : t0[$forEach](dart.fn(behavior => {
          types.addAll(behavior.desiredGestures);
        }, ChartBehaviorOfChartBehaviorToNull()));
        if (dart.test(this.defaultInteractions) && dart.test(chartState.autoBehaviorWidgets[$isEmpty])) {
          this.addDefaultInteractions(chartState.autoBehaviorWidgets);
        }
        chartState.autoBehaviorWidgets[$forEach](dart.fn(behavior => {
          types.addAll(behavior.desiredGestures);
        }, ChartBehaviorOfChartBehaviorToNull()));
        return types;
      }
    }
    (BaseChart.new = function(seriesList, opts) {
      let t0, t0$;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
      let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
      let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
      let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
      let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
      let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
      let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
      let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[seriesList$] = seriesList;
      this[defaultRenderer$] = defaultRenderer;
      this[customSeriesRenderers$] = customSeriesRenderers;
      this[behaviors$] = behaviors;
      this[selectionModels$] = selectionModels;
      this[rtlSpec$] = rtlSpec;
      this[defaultInteractions$] = defaultInteractions;
      this[layoutConfig$] = layoutConfig;
      this[userManagedState$] = userManagedState;
      this[animate$] = (t0 = animate, t0 == null ? true : t0);
      this[animationDuration$] = (t0$ = animationDuration, t0$ == null ? C0 || CT.C0 : t0$);
      BaseChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BaseChart.prototype;
    dart.addTypeTests(BaseChart);
    BaseChart.prototype[_is_BaseChart_default] = true;
    dart.setMethodSignature(BaseChart, () => ({
      __proto__: dart.getMethods(BaseChart.__proto__),
      createState: dart.fnType(base_chart_state.BaseChartState$(D), []),
      updateCommonChart: dart.fnType(dart.void, [base_chart.BaseChart, core.Object, core.Object]),
      [_updateBehaviors]: dart.fnType(dart.void, [base_chart.BaseChart, base_chart_state.BaseChartState]),
      addDefaultInteractions: dart.fnType(dart.void, [core.List$(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior))]),
      [_notACustomBehavior]: dart.fnType(core.bool, [chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)]),
      [_updateSelectionModel]: dart.fnType(dart.void, [base_chart.BaseChart$(D), base_chart_state.BaseChartState$(D)]),
      getDesiredGestures: dart.fnType(core.Set$(chart_behavior$.GestureType), [base_chart_state.BaseChartState])
    }));
    dart.setLibraryUri(BaseChart, "package:charts_flutter/src/base_chart.dart");
    dart.setFieldSignature(BaseChart, () => ({
      __proto__: dart.getFields(BaseChart.__proto__),
      seriesList: dart.finalFieldType(core.List$(series.Series$(dart.dynamic, D))),
      animate: dart.finalFieldType(core.bool),
      animationDuration: dart.finalFieldType(core.Duration),
      layoutConfig: dart.finalFieldType(base_chart$.LayoutConfig),
      defaultRenderer: dart.finalFieldType(series_renderer_config.SeriesRendererConfig$(D)),
      defaultInteractions: dart.finalFieldType(core.bool),
      behaviors: dart.finalFieldType(core.List$(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior))),
      selectionModels: dart.finalFieldType(core.List$(selection_model_config.SelectionModelConfig$(D))),
      customSeriesRenderers: dart.finalFieldType(core.List$(series_renderer_config.SeriesRendererConfig$(D))),
      rtlSpec: dart.finalFieldType(rtl_spec.RTLSpec),
      userManagedState: dart.finalFieldType(user_managed_state.UserManagedState$(D))
    }));
    return BaseChart;
  });
  base_chart$.BaseChart = base_chart$.BaseChart$();
  dart.addTypeTests(base_chart$.BaseChart, _is_BaseChart_default);
  const _is_CartesianChart_default = Symbol('_is_CartesianChart_default');
  const domainAxis$ = dart.privateName(cartesian_chart$, "CartesianChart.domainAxis");
  const primaryMeasureAxis$ = dart.privateName(cartesian_chart$, "CartesianChart.primaryMeasureAxis");
  const secondaryMeasureAxis$ = dart.privateName(cartesian_chart$, "CartesianChart.secondaryMeasureAxis");
  const disjointMeasureAxes$ = dart.privateName(cartesian_chart$, "CartesianChart.disjointMeasureAxes");
  const flipVerticalAxis$ = dart.privateName(cartesian_chart$, "CartesianChart.flipVerticalAxis");
  cartesian_chart$.CartesianChart$ = dart.generic(D => {
    let UserManagedStateOfD = () => (UserManagedStateOfD = dart.constFn(user_managed_state.UserManagedState$(D)))();
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart$.BaseChart$(D)))();
    let BaseChartStateOfD = () => (BaseChartStateOfD = dart.constFn(base_chart_state.BaseChartState$(D)))();
    class CartesianChart extends base_chart$.BaseChart$(D) {
      get domainAxis() {
        return this[domainAxis$];
      }
      set domainAxis(value) {
        super.domainAxis = value;
      }
      get primaryMeasureAxis() {
        return this[primaryMeasureAxis$];
      }
      set primaryMeasureAxis(value) {
        super.primaryMeasureAxis = value;
      }
      get secondaryMeasureAxis() {
        return this[secondaryMeasureAxis$];
      }
      set secondaryMeasureAxis(value) {
        super.secondaryMeasureAxis = value;
      }
      get disjointMeasureAxes() {
        return this[disjointMeasureAxes$];
      }
      set disjointMeasureAxes(value) {
        super.disjointMeasureAxes = value;
      }
      get flipVerticalAxis() {
        return this[flipVerticalAxis$];
      }
      set flipVerticalAxis(value) {
        super.flipVerticalAxis = value;
      }
      updateCommonChart(baseChart, oldWidget, chartState) {
        let t0, t0$, t0$0, t0$1;
        base_chart$.BaseChart._check(oldWidget);
        base_chart_state.BaseChartState._check(chartState);
        super.updateCommonChart(baseChart, BaseChartOfD()._check(oldWidget), BaseChartStateOfD()._check(chartState));
        let prev = cartesian_chart$.CartesianChart.as(oldWidget);
        let chart = cartesian_chart.CartesianChart.as(baseChart);
        if (this.flipVerticalAxis != null) {
          chart.flipVerticalAxisOutput = this.flipVerticalAxis;
        }
        if (this.domainAxis != null && !dart.equals(this.domainAxis, (t0 = prev, t0 == null ? null : t0.domainAxis))) {
          chart.domainAxisSpec = this.domainAxis;
          chartState.markChartDirty();
        }
        if (this.primaryMeasureAxis != null && !dart.equals(this.primaryMeasureAxis, (t0$ = prev, t0$ == null ? null : t0$.primaryMeasureAxis))) {
          chart.primaryMeasureAxisSpec = this.primaryMeasureAxis;
          chartState.markChartDirty();
        }
        if (this.secondaryMeasureAxis != null && !dart.equals(this.secondaryMeasureAxis, (t0$0 = prev, t0$0 == null ? null : t0$0.secondaryMeasureAxis))) {
          chart.secondaryMeasureAxisSpec = this.secondaryMeasureAxis;
          chartState.markChartDirty();
        }
        if (this.disjointMeasureAxes != null && !dart.equals(this.disjointMeasureAxes, (t0$1 = prev, t0$1 == null ? null : t0$1.disjointMeasureAxes))) {
          chart.disjointMeasureAxisSpecs = this.disjointMeasureAxes;
          chartState.markChartDirty();
        }
      }
      createDisjointMeasureAxes() {
        if (this.disjointMeasureAxes != null) {
          let disjointAxes = new (IdentityMapOfString$NumericAxis()).new();
          this.disjointMeasureAxes[$forEach](dart.fn((axisId, axisSpec) => {
            disjointAxes[$_set](axisId, axisSpec.createAxis());
          }, StringAndNumericAxisSpecToNull()));
          return disjointAxes;
        } else {
          return null;
        }
      }
    }
    (CartesianChart.new = function(seriesList, opts) {
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
      let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
      let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
      let disjointMeasureAxes = opts && 'disjointMeasureAxes' in opts ? opts.disjointMeasureAxes : null;
      let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
      let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
      let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
      let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
      let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
      let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
      let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
      let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
      let flipVerticalAxis = opts && 'flipVerticalAxis' in opts ? opts.flipVerticalAxis : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[domainAxis$] = domainAxis;
      this[primaryMeasureAxis$] = primaryMeasureAxis;
      this[secondaryMeasureAxis$] = secondaryMeasureAxis;
      this[disjointMeasureAxes$] = disjointMeasureAxes;
      this[flipVerticalAxis$] = flipVerticalAxis;
      CartesianChart.__proto__.new.call(this, seriesList, {animate: animate, animationDuration: animationDuration, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, defaultInteractions: defaultInteractions, layoutConfig: layoutConfig, userManagedState: UserManagedStateOfD()._check(userManagedState), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = CartesianChart.prototype;
    dart.addTypeTests(CartesianChart);
    CartesianChart.prototype[_is_CartesianChart_default] = true;
    dart.setMethodSignature(CartesianChart, () => ({
      __proto__: dart.getMethods(CartesianChart.__proto__),
      createDisjointMeasureAxes: dart.fnType(collection.LinkedHashMap$(core.String, axis.NumericAxis), [])
    }));
    dart.setLibraryUri(CartesianChart, "package:charts_flutter/src/cartesian_chart.dart");
    dart.setFieldSignature(CartesianChart, () => ({
      __proto__: dart.getFields(CartesianChart.__proto__),
      domainAxis: dart.finalFieldType(axis_spec.AxisSpec),
      primaryMeasureAxis: dart.finalFieldType(axis_spec.AxisSpec),
      secondaryMeasureAxis: dart.finalFieldType(axis_spec.AxisSpec),
      disjointMeasureAxes: dart.finalFieldType(collection.LinkedHashMap$(core.String, numeric_axis_spec.NumericAxisSpec)),
      flipVerticalAxis: dart.finalFieldType(core.bool)
    }));
    return CartesianChart;
  });
  cartesian_chart$.CartesianChart = cartesian_chart$.CartesianChart$();
  dart.addTypeTests(cartesian_chart$.CartesianChart, _is_CartesianChart_default);
  const _is_UserManagedState_default = Symbol('_is_UserManagedState_default');
  const selectionModels = dart.privateName(user_managed_state, "UserManagedState.selectionModels");
  user_managed_state.UserManagedState$ = dart.generic(D => {
    let UserManagedSelectionModelOfD = () => (UserManagedSelectionModelOfD = dart.constFn(user_managed_state.UserManagedSelectionModel$(D)))();
    let LinkedMapOfSelectionModelType$UserManagedSelectionModelOfD = () => (LinkedMapOfSelectionModelType$UserManagedSelectionModelOfD = dart.constFn(_js_helper.LinkedMap$(selection_model.SelectionModelType, UserManagedSelectionModelOfD())))();
    class UserManagedState extends core.Object {
      get selectionModels() {
        return this[selectionModels];
      }
      set selectionModels(value) {
        super.selectionModels = value;
      }
    }
    (UserManagedState.new = function() {
      this[selectionModels] = new (LinkedMapOfSelectionModelType$UserManagedSelectionModelOfD()).new();
      ;
    }).prototype = UserManagedState.prototype;
    dart.addTypeTests(UserManagedState);
    UserManagedState.prototype[_is_UserManagedState_default] = true;
    dart.setLibraryUri(UserManagedState, "package:charts_flutter/src/user_managed_state.dart");
    dart.setFieldSignature(UserManagedState, () => ({
      __proto__: dart.getFields(UserManagedState.__proto__),
      selectionModels: dart.finalFieldType(core.Map$(selection_model.SelectionModelType, user_managed_state.UserManagedSelectionModel$(D)))
    }));
    return UserManagedState;
  });
  user_managed_state.UserManagedState = user_managed_state.UserManagedState$();
  dart.addTypeTests(user_managed_state.UserManagedState, _is_UserManagedState_default);
  const _model = dart.privateName(user_managed_state, "_model");
  const _is_UserManagedSelectionModel_default = Symbol('_is_UserManagedSelectionModel_default');
  const selectedSeriesConfig$ = dart.privateName(user_managed_state, "UserManagedSelectionModel.selectedSeriesConfig");
  const selectedDataConfig$ = dart.privateName(user_managed_state, "UserManagedSelectionModel.selectedDataConfig");
  user_managed_state.UserManagedSelectionModel$ = dart.generic(D => {
    let SelectionModelOfD = () => (SelectionModelOfD = dart.constFn(selection_model.SelectionModel$(D)))();
    let ImmutableSeriesOfD = () => (ImmutableSeriesOfD = dart.constFn(processed_series.ImmutableSeries$(D)))();
    let ListOfImmutableSeriesOfD = () => (ListOfImmutableSeriesOfD = dart.constFn(core.List$(ImmutableSeriesOfD())))();
    class UserManagedSelectionModel extends core.Object {
      get selectedSeriesConfig() {
        return this[selectedSeriesConfig$];
      }
      set selectedSeriesConfig(value) {
        super.selectedSeriesConfig = value;
      }
      get selectedDataConfig() {
        return this[selectedDataConfig$];
      }
      set selectedDataConfig(value) {
        super.selectedDataConfig = value;
      }
      getModel(seriesList) {
        ListOfImmutableSeriesOfD()._check(seriesList);
        this[_model] == null ? this[_model] = new (SelectionModelOfD()).fromConfig(this.selectedDataConfig, this.selectedSeriesConfig, seriesList) : null;
        return this[_model];
      }
    }
    (UserManagedSelectionModel.new = function(opts) {
      let t0;
      let model = opts && 'model' in opts ? opts.model : null;
      this[_model] = (t0 = model, t0 == null ? new (SelectionModelOfD()).new() : t0);
      this[selectedSeriesConfig$] = null;
      this[selectedDataConfig$] = null;
      ;
    }).prototype = UserManagedSelectionModel.prototype;
    (UserManagedSelectionModel.fromConfig = function(opts) {
      let t0, t0$;
      let selectedSeriesConfig = opts && 'selectedSeriesConfig' in opts ? opts.selectedSeriesConfig : null;
      let selectedDataConfig = opts && 'selectedDataConfig' in opts ? opts.selectedDataConfig : null;
      this[_model] = null;
      this[selectedSeriesConfig$] = (t0 = selectedSeriesConfig, t0 == null ? JSArrayOfString().of([]) : t0);
      this[selectedDataConfig$] = (t0$ = selectedDataConfig, t0$ == null ? JSArrayOfSeriesDatumConfig().of([]) : t0$);
      ;
    }).prototype = UserManagedSelectionModel.prototype;
    dart.addTypeTests(UserManagedSelectionModel);
    UserManagedSelectionModel.prototype[_is_UserManagedSelectionModel_default] = true;
    dart.setMethodSignature(UserManagedSelectionModel, () => ({
      __proto__: dart.getMethods(UserManagedSelectionModel.__proto__),
      getModel: dart.fnType(selection_model.SelectionModel$(D), [core.Object])
    }));
    dart.setLibraryUri(UserManagedSelectionModel, "package:charts_flutter/src/user_managed_state.dart");
    dart.setFieldSignature(UserManagedSelectionModel, () => ({
      __proto__: dart.getFields(UserManagedSelectionModel.__proto__),
      selectedSeriesConfig: dart.finalFieldType(core.List$(core.String)),
      selectedDataConfig: dart.finalFieldType(core.List$(series_datum.SeriesDatumConfig)),
      [_model]: dart.fieldType(selection_model.SelectionModel$(D))
    }));
    return UserManagedSelectionModel;
  });
  user_managed_state.UserManagedSelectionModel = user_managed_state.UserManagedSelectionModel$();
  dart.addTypeTests(user_managed_state.UserManagedSelectionModel, _is_UserManagedSelectionModel_default);
  const _name = dart.privateName(selection_model, "_name");
  let C1;
  const _is_SelectionModelConfig_default = Symbol('_is_SelectionModelConfig_default');
  const type$ = dart.privateName(selection_model_config, "SelectionModelConfig.type");
  const changedListener$ = dart.privateName(selection_model_config, "SelectionModelConfig.changedListener");
  const updatedListener$ = dart.privateName(selection_model_config, "SelectionModelConfig.updatedListener");
  selection_model_config.SelectionModelConfig$ = dart.generic(D => {
    class SelectionModelConfig extends core.Object {
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      get changedListener() {
        return this[changedListener$];
      }
      set changedListener(value) {
        super.changedListener = value;
      }
      get updatedListener() {
        return this[updatedListener$];
      }
      set updatedListener(value) {
        super.updatedListener = value;
      }
    }
    (SelectionModelConfig.new = function(opts) {
      let type = opts && 'type' in opts ? opts.type : C1 || CT.C1;
      let changedListener = opts && 'changedListener' in opts ? opts.changedListener : null;
      let updatedListener = opts && 'updatedListener' in opts ? opts.updatedListener : null;
      this[type$] = type;
      this[changedListener$] = changedListener;
      this[updatedListener$] = updatedListener;
      ;
    }).prototype = SelectionModelConfig.prototype;
    dart.addTypeTests(SelectionModelConfig);
    SelectionModelConfig.prototype[_is_SelectionModelConfig_default] = true;
    dart.setLibraryUri(SelectionModelConfig, "package:charts_flutter/src/selection_model_config.dart");
    dart.setFieldSignature(SelectionModelConfig, () => ({
      __proto__: dart.getFields(SelectionModelConfig.__proto__),
      type: dart.finalFieldType(selection_model.SelectionModelType),
      changedListener: dart.finalFieldType(dart.fnType(dart.dynamic, [selection_model.SelectionModel$(D)])),
      updatedListener: dart.finalFieldType(dart.fnType(dart.dynamic, [selection_model.SelectionModel$(D)]))
    }));
    return SelectionModelConfig;
  });
  selection_model_config.SelectionModelConfig = selection_model_config.SelectionModelConfig$();
  dart.addTypeTests(selection_model_config.SelectionModelConfig, _is_SelectionModelConfig_default);
  const leftMarginSpec$ = dart.privateName(base_chart$, "LayoutConfig.leftMarginSpec");
  const topMarginSpec$ = dart.privateName(base_chart$, "LayoutConfig.topMarginSpec");
  const rightMarginSpec$ = dart.privateName(base_chart$, "LayoutConfig.rightMarginSpec");
  const bottomMarginSpec$ = dart.privateName(base_chart$, "LayoutConfig.bottomMarginSpec");
  base_chart$.LayoutConfig = class LayoutConfig extends core.Object {
    get leftMarginSpec() {
      return this[leftMarginSpec$];
    }
    set leftMarginSpec(value) {
      super.leftMarginSpec = value;
    }
    get topMarginSpec() {
      return this[topMarginSpec$];
    }
    set topMarginSpec(value) {
      super.topMarginSpec = value;
    }
    get rightMarginSpec() {
      return this[rightMarginSpec$];
    }
    set rightMarginSpec(value) {
      super.rightMarginSpec = value;
    }
    get bottomMarginSpec() {
      return this[bottomMarginSpec$];
    }
    set bottomMarginSpec(value) {
      super.bottomMarginSpec = value;
    }
    get commonLayoutConfig() {
      return new layout_config.LayoutConfig.new({leftSpec: this.leftMarginSpec, topSpec: this.topMarginSpec, rightSpec: this.rightMarginSpec, bottomSpec: this.bottomMarginSpec});
    }
  };
  (base_chart$.LayoutConfig.new = function(opts) {
    let leftMarginSpec = opts && 'leftMarginSpec' in opts ? opts.leftMarginSpec : null;
    let topMarginSpec = opts && 'topMarginSpec' in opts ? opts.topMarginSpec : null;
    let rightMarginSpec = opts && 'rightMarginSpec' in opts ? opts.rightMarginSpec : null;
    let bottomMarginSpec = opts && 'bottomMarginSpec' in opts ? opts.bottomMarginSpec : null;
    this[leftMarginSpec$] = leftMarginSpec;
    this[topMarginSpec$] = topMarginSpec;
    this[rightMarginSpec$] = rightMarginSpec;
    this[bottomMarginSpec$] = bottomMarginSpec;
    ;
  }).prototype = base_chart$.LayoutConfig.prototype;
  dart.addTypeTests(base_chart$.LayoutConfig);
  dart.setGetterSignature(base_chart$.LayoutConfig, () => ({
    __proto__: dart.getGetters(base_chart$.LayoutConfig.__proto__),
    commonLayoutConfig: layout_config.LayoutConfig
  }));
  dart.setLibraryUri(base_chart$.LayoutConfig, "package:charts_flutter/src/base_chart.dart");
  dart.setFieldSignature(base_chart$.LayoutConfig, () => ({
    __proto__: dart.getFields(base_chart$.LayoutConfig.__proto__),
    leftMarginSpec: dart.finalFieldType(layout_config.MarginSpec),
    topMarginSpec: dart.finalFieldType(layout_config.MarginSpec),
    rightMarginSpec: dart.finalFieldType(layout_config.MarginSpec),
    bottomMarginSpec: dart.finalFieldType(layout_config.MarginSpec)
  }));
  const _animationController = dart.privateName(base_chart_state, "_animationController");
  const _animationValue = dart.privateName(base_chart_state, "_animationValue");
  const _oldWidget = dart.privateName(base_chart_state, "_oldWidget");
  const _chartGestureDetector = dart.privateName(base_chart_state, "_chartGestureDetector");
  const _configurationChanged = dart.privateName(base_chart_state, "_configurationChanged");
  const _behaviorAnimationControllers = dart.privateName(base_chart_state, "_behaviorAnimationControllers");
  const _animationTick = dart.privateName(base_chart_state, "_animationTick");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C3;
  let C2;
  const _buildChartContainer = dart.privateName(base_chart_state, "_buildChartContainer");
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  const _playAnimation = dart.privateName(base_chart_state, "_playAnimation");
  const _is_BaseChartState_default = Symbol('_is_BaseChartState_default');
  const autoBehaviorWidgets = dart.privateName(base_chart_state, "BaseChartState.autoBehaviorWidgets");
  const addedBehaviorWidgets = dart.privateName(base_chart_state, "BaseChartState.addedBehaviorWidgets");
  const addedCommonBehaviorsByRole = dart.privateName(base_chart_state, "BaseChartState.addedCommonBehaviorsByRole");
  const addedSelectionChangedListenersByType = dart.privateName(base_chart_state, "BaseChartState.addedSelectionChangedListenersByType");
  const addedSelectionUpdatedListenersByType = dart.privateName(base_chart_state, "BaseChartState.addedSelectionUpdatedListenersByType");
  base_chart_state.BaseChartState$ = dart.generic(D => {
    let SelectionModelOfD = () => (SelectionModelOfD = dart.constFn(selection_model.SelectionModel$(D)))();
    let SelectionModelOfDTodynamic = () => (SelectionModelOfDTodynamic = dart.constFn(dart.fnType(dart.dynamic, [SelectionModelOfD()])))();
    let LinkedMapOfSelectionModelType$SelectionModelOfDTodynamic = () => (LinkedMapOfSelectionModelType$SelectionModelOfDTodynamic = dart.constFn(_js_helper.LinkedMap$(selection_model.SelectionModelType, SelectionModelOfDTodynamic())))();
    let ChartContainerOfD = () => (ChartContainerOfD = dart.constFn(chart_container.ChartContainer$(D)))();
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart$.BaseChart$(D)))();
    const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(base_chart$.BaseChart$(D)) {};
    (State_TickerProviderStateMixin$36.new = function() {
      ticker_provider.TickerProviderStateMixin$(base_chart$.BaseChart$(D))[dart.mixinNew].call(this);
      State_TickerProviderStateMixin$36.__proto__.new.call(this);
    }).prototype = State_TickerProviderStateMixin$36.prototype;
    dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(base_chart$.BaseChart$(D)));
    class BaseChartState extends State_TickerProviderStateMixin$36 {
      get autoBehaviorWidgets() {
        return this[autoBehaviorWidgets];
      }
      set autoBehaviorWidgets(value) {
        super.autoBehaviorWidgets = value;
      }
      get addedBehaviorWidgets() {
        return this[addedBehaviorWidgets];
      }
      set addedBehaviorWidgets(value) {
        super.addedBehaviorWidgets = value;
      }
      get addedCommonBehaviorsByRole() {
        return this[addedCommonBehaviorsByRole];
      }
      set addedCommonBehaviorsByRole(value) {
        super.addedCommonBehaviorsByRole = value;
      }
      get addedSelectionChangedListenersByType() {
        return this[addedSelectionChangedListenersByType];
      }
      set addedSelectionChangedListenersByType(value) {
        super.addedSelectionChangedListenersByType = value;
      }
      get addedSelectionUpdatedListenersByType() {
        return this[addedSelectionUpdatedListenersByType];
      }
      set addedSelectionUpdatedListenersByType(value) {
        super.addedSelectionUpdatedListenersByType = value;
      }
      initState() {
        let t0;
        super.initState();
        this[_animationController] = (t0 = new animation_controller.AnimationController.new({vsync: this}), t0.addListener(dart.bind(this, _animationTick)), t0);
      }
      requestRebuild() {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }
      markChartDirty() {
        this[_configurationChanged] = true;
      }
      resetChartDirtyFlag() {
        this[_configurationChanged] = false;
      }
      get chartIsDirty() {
        return this[_configurationChanged];
      }
      [_buildChartContainer]() {
        let chartContainer = new (ChartContainerOfD()).new({oldChartWidget: BaseChartOfD()._check(this[_oldWidget]), chartWidget: this.widget, chartState: this, animationValue: this[_animationValue], rtl: dart.equals(basic.Directionality.of(this.context), ui.TextDirection.rtl), rtlSpec: this.widget.rtlSpec, userManagedState: this.widget.userManagedState, $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
        this[_oldWidget] = this.widget;
        let desiredGestures = this.widget.getDesiredGestures(this);
        if (dart.test(desiredGestures[$isNotEmpty])) {
          this[_chartGestureDetector] == null ? this[_chartGestureDetector] = new chart_gesture_detector.ChartGestureDetector.new() : null;
          return framework.Widget._check(this[_chartGestureDetector].makeWidget(this.context, chartContainer, desiredGestures));
        } else {
          return chartContainer;
        }
      }
      build(context) {
        let chartWidgets = JSArrayOfLayoutId().of([]);
        let idAndBehaviorMap = new (IdentityMapOfString$BuildableBehaviorOfChartBehavior()).new();
        chartWidgets[$add](new basic.LayoutId.new({id: "chartContainer", child: this[_buildChartContainer](), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}));
        this.addedCommonBehaviorsByRole[$forEach](dart.fn((id, behavior) => {
          if (BuildableBehaviorOfChartBehavior().is(behavior)) {
            if (!(id !== "chartContainer")) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/base_chart_state.dart", 122, 16, "id != chartContainerLayoutID");
            let buildableBehavior = BuildableBehaviorOfChartBehavior().as(behavior);
            idAndBehaviorMap[$_set](id, buildableBehavior);
            let widget = buildableBehavior.build(context);
            chartWidgets[$add](new basic.LayoutId.new({id: id, child: widget, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}));
          }
        }, StringAndChartBehaviorToNull()));
        let isRTL = dart.equals(basic.Directionality.of(context), ui.TextDirection.rtl);
        return new basic.CustomMultiChildLayout.new({delegate: new widget_layout_delegate.WidgetLayoutDelegate.new("chartContainer", idAndBehaviorMap, isRTL), children: chartWidgets, $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
      }
      dispose() {
        this[_animationController].dispose();
        this[_behaviorAnimationControllers][$forEach](dart.fn((_, controller) => {
          let t0;
          t0 = controller;
          return t0 == null ? null : t0.dispose();
        }, ChartStateBehaviorOfChartBehaviorAndAnimationControllerTovoid()));
        this[_behaviorAnimationControllers][$clear]();
        super.dispose();
      }
      setAnimation(transition) {
        this[_playAnimation](transition);
      }
      [_playAnimation](duration) {
        this[_animationController].duration = duration;
        this[_animationController].forward({from: dart.equals(duration, core.Duration.zero) ? 1.0 : 0.0});
        this[_animationValue] = this[_animationController].value;
      }
      [_animationTick]() {
        this.setState(dart.fn(() => {
          this[_animationValue] = this[_animationController].value;
        }, VoidToNull()));
      }
      getAnimationController(behavior) {
        let t1, t0;
        t0 = this[_behaviorAnimationControllers];
        t1 = behavior;
        t0[$_get](t1) == null ? t0[$_set](t1, new animation_controller.AnimationController.new({vsync: this})) : null;
        return this[_behaviorAnimationControllers][$_get](behavior);
      }
      disposeAnimationController(behavior) {
        let t0;
        let controller = this[_behaviorAnimationControllers][$remove](behavior);
        t0 = controller;
        t0 == null ? null : t0.dispose();
      }
    }
    (BaseChartState.new = function() {
      this[_animationController] = null;
      this[_animationValue] = 0.0;
      this[_oldWidget] = null;
      this[_chartGestureDetector] = null;
      this[_configurationChanged] = false;
      this[autoBehaviorWidgets] = JSArrayOfChartBehaviorOfChartBehavior().of([]);
      this[addedBehaviorWidgets] = JSArrayOfChartBehaviorOfChartBehavior().of([]);
      this[addedCommonBehaviorsByRole] = new (IdentityMapOfString$ChartBehavior()).new();
      this[addedSelectionChangedListenersByType] = new (LinkedMapOfSelectionModelType$SelectionModelOfDTodynamic()).new();
      this[addedSelectionUpdatedListenersByType] = new (LinkedMapOfSelectionModelType$SelectionModelOfDTodynamic()).new();
      this[_behaviorAnimationControllers] = new (LinkedMapOfChartStateBehaviorOfChartBehavior$AnimationController()).new();
      BaseChartState.__proto__.new.call(this);
      ;
    }).prototype = BaseChartState.prototype;
    dart.addTypeTests(BaseChartState);
    BaseChartState.prototype[_is_BaseChartState_default] = true;
    BaseChartState[dart.implements] = () => [chart_state.ChartState];
    dart.setMethodSignature(BaseChartState, () => ({
      __proto__: dart.getMethods(BaseChartState.__proto__),
      requestRebuild: dart.fnType(dart.void, []),
      markChartDirty: dart.fnType(dart.void, []),
      resetChartDirtyFlag: dart.fnType(dart.void, []),
      [_buildChartContainer]: dart.fnType(framework.Widget, []),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      setAnimation: dart.fnType(dart.void, [core.Duration]),
      [_playAnimation]: dart.fnType(dart.void, [core.Duration]),
      [_animationTick]: dart.fnType(dart.void, []),
      getAnimationController: dart.fnType(animation_controller.AnimationController, [chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior)]),
      disposeAnimationController: dart.fnType(dart.void, [chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior)])
    }));
    dart.setGetterSignature(BaseChartState, () => ({
      __proto__: dart.getGetters(BaseChartState.__proto__),
      chartIsDirty: core.bool
    }));
    dart.setLibraryUri(BaseChartState, "package:charts_flutter/src/base_chart_state.dart");
    dart.setFieldSignature(BaseChartState, () => ({
      __proto__: dart.getFields(BaseChartState.__proto__),
      [_animationController]: dart.fieldType(animation_controller.AnimationController),
      [_animationValue]: dart.fieldType(core.double),
      [_oldWidget]: dart.fieldType(framework.Widget),
      [_chartGestureDetector]: dart.fieldType(chart_gesture_detector.ChartGestureDetector),
      [_configurationChanged]: dart.fieldType(core.bool),
      autoBehaviorWidgets: dart.finalFieldType(core.List$(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior))),
      addedBehaviorWidgets: dart.finalFieldType(core.List$(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior))),
      addedCommonBehaviorsByRole: dart.finalFieldType(core.Map$(core.String, chart_behavior.ChartBehavior)),
      addedSelectionChangedListenersByType: dart.finalFieldType(core.Map$(selection_model.SelectionModelType, dart.fnType(dart.dynamic, [selection_model.SelectionModel$(D)]))),
      addedSelectionUpdatedListenersByType: dart.finalFieldType(core.Map$(selection_model.SelectionModelType, dart.fnType(dart.dynamic, [selection_model.SelectionModel$(D)]))),
      [_behaviorAnimationControllers]: dart.finalFieldType(core.Map$(chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior), animation_controller.AnimationController))
    }));
    return BaseChartState;
  });
  base_chart_state.BaseChartState = base_chart_state.BaseChartState$();
  dart.defineLazy(base_chart_state.BaseChartState, {
    /*base_chart_state.BaseChartState.chartContainerLayoutID*/get chartContainerLayoutID() {
      return "chartContainer";
    }
  });
  dart.addTypeTests(base_chart_state.BaseChartState, _is_BaseChartState_default);
  const _getBehaviorOffset = dart.privateName(widget_layout_delegate, "_getBehaviorOffset");
  const _name$ = dart.privateName(widget_layout_delegate, "_name");
  let C23;
  let C24;
  let C25;
  let C26;
  const _name$0 = dart.privateName(chart_behavior, "_name");
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  const chartID$ = dart.privateName(widget_layout_delegate, "WidgetLayoutDelegate.chartID");
  const isRTL$ = dart.privateName(widget_layout_delegate, "WidgetLayoutDelegate.isRTL");
  const idAndBehavior$ = dart.privateName(widget_layout_delegate, "WidgetLayoutDelegate.idAndBehavior");
  widget_layout_delegate.WidgetLayoutDelegate = class WidgetLayoutDelegate extends custom_layout.MultiChildLayoutDelegate {
    get chartID() {
      return this[chartID$];
    }
    set chartID(value) {
      super.chartID = value;
    }
    get isRTL() {
      return this[isRTL$];
    }
    set isRTL(value) {
      super.isRTL = value;
    }
    get idAndBehavior() {
      return this[idAndBehavior$];
    }
    set idAndBehavior(value) {
      super.idAndBehavior = value;
    }
    performLayout(size) {
      if (!(dart.test(this.idAndBehavior[$keys][$isEmpty]) || this.idAndBehavior[$keys][$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/widget_layout_delegate.dart", 43, 12, "idAndBehavior.keys.isEmpty || idAndBehavior.keys.length == 1");
      let availableWidth = size.width;
      let availableHeight = size.height;
      let chartOffset = ui.Offset.zero;
      let behaviorID = dart.test(this.idAndBehavior[$keys][$isNotEmpty]) ? this.idAndBehavior[$keys][$first] : null;
      let behaviorSize = ui.Size.zero;
      if (behaviorID != null) {
        if (dart.test(this.hasChild(behaviorID))) {
          let leftPosition = dart.dtest(this.isRTL) ? chart_behavior.BehaviorPosition.end : chart_behavior.BehaviorPosition.start;
          let rightPosition = dart.dtest(this.isRTL) ? chart_behavior.BehaviorPosition.start : chart_behavior.BehaviorPosition.end;
          let behaviorPosition = this.idAndBehavior[$_get](behaviorID).position;
          behaviorSize = this.layoutChild(behaviorID, new box.BoxConstraints.loose(size));
          if (dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.top)) {
            chartOffset = new ui.Offset.new(0.0, behaviorSize.height);
            availableHeight = dart.notNull(availableHeight) - dart.notNull(behaviorSize.height);
          } else if (dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.bottom)) {
            availableHeight = dart.notNull(availableHeight) - dart.notNull(behaviorSize.height);
          } else if (dart.equals(behaviorPosition, leftPosition)) {
            chartOffset = new ui.Offset.new(behaviorSize.width, 0.0);
            availableWidth = dart.notNull(availableWidth) - dart.notNull(behaviorSize.width);
          } else if (dart.equals(behaviorPosition, rightPosition)) {
            availableWidth = dart.notNull(availableWidth) - dart.notNull(behaviorSize.width);
          }
        }
      }
      let chartSize = new ui.Size.new(availableWidth, availableHeight);
      if (dart.test(this.hasChild(this.chartID))) {
        this.layoutChild(this.chartID, new box.BoxConstraints.tight(chartSize));
        this.positionChild(this.chartID, chartOffset);
      }
      if (behaviorID != null) {
        let behaviorOffset = this[_getBehaviorOffset](this.idAndBehavior[$_get](behaviorID), {behaviorSize: behaviorSize, chartSize: chartSize, isRTL: core.bool._check(this.isRTL)});
        this.positionChild(behaviorID, behaviorOffset);
      }
    }
    shouldRelayout(oldDelegate) {
      custom_layout.MultiChildLayoutDelegate._check(oldDelegate);
      return !dart.equals(this.idAndBehavior, widget_layout_delegate.WidgetLayoutDelegate.as(oldDelegate).idAndBehavior);
    }
    [_getBehaviorOffset](behavior, opts) {
      let behaviorSize = opts && 'behaviorSize' in opts ? opts.behaviorSize : null;
      let chartSize = opts && 'chartSize' in opts ? opts.chartSize : null;
      let isRTL = opts && 'isRTL' in opts ? opts.isRTL : null;
      let behaviorOffset = null;
      let behaviorPosition = behavior.position;
      let outsideJustification = behavior.outsideJustification;
      let insideJustification = behavior.insideJustification;
      if (dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.top) || dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.bottom)) {
        let heightOffset = dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.bottom) ? chartSize.height : 0.0;
        let horizontalJustification = this.getOutsideJustification(outsideJustification, isRTL);
        switch (horizontalJustification) {
          case C23 || CT.C23:
          {
            behaviorOffset = new ui.Offset.new(behavior.drawAreaBounds[$left][$toDouble](), heightOffset);
            break;
          }
          case C24 || CT.C24:
          {
            behaviorOffset = new ui.Offset.new(0.0, heightOffset);
            break;
          }
          case C25 || CT.C25:
          {
            behaviorOffset = new ui.Offset.new(dart.notNull(behavior.drawAreaBounds[$right]) - dart.notNull(behaviorSize.width), heightOffset);
            break;
          }
          case C26 || CT.C26:
          {
            behaviorOffset = new ui.Offset.new(dart.notNull(chartSize.width) - dart.notNull(behaviorSize.width), heightOffset);
            break;
          }
        }
      } else if (dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.start) || dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.end)) {
        let widthOffset = dart.test(isRTL) && dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.start) || !dart.test(isRTL) && dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.end) ? chartSize.width : 0.0;
        switch (outsideJustification) {
          case C27 || CT.C27:
          case C28 || CT.C28:
          {
            behaviorOffset = new ui.Offset.new(widthOffset, behavior.drawAreaBounds[$top][$toDouble]());
            break;
          }
          case C29 || CT.C29:
          case C30 || CT.C30:
          {
            behaviorOffset = new ui.Offset.new(widthOffset, 0.0);
            break;
          }
          case C31 || CT.C31:
          {
            behaviorOffset = new ui.Offset.new(widthOffset, dart.notNull(behavior.drawAreaBounds[$bottom]) - dart.notNull(behaviorSize.height));
            break;
          }
          case C32 || CT.C32:
          {
            behaviorOffset = new ui.Offset.new(widthOffset, dart.notNull(chartSize.height) - dart.notNull(behaviorSize.height));
            break;
          }
        }
      } else if (dart.equals(behaviorPosition, chart_behavior.BehaviorPosition.inside)) {
        let rightOffset = new ui.Offset.new(dart.notNull(chartSize.width) - dart.notNull(behaviorSize.width), 0.0);
        switch (insideJustification) {
          case C33 || CT.C33:
          {
            behaviorOffset = dart.test(isRTL) ? rightOffset : ui.Offset.zero;
            break;
          }
          case C34 || CT.C34:
          {
            behaviorOffset = dart.test(isRTL) ? ui.Offset.zero : rightOffset;
            break;
          }
        }
      }
      return behaviorOffset;
    }
    getOutsideJustification(justification, isRTL) {
      let mappedJustification = null;
      switch (justification) {
        case C27 || CT.C27:
        case C28 || CT.C28:
        {
          mappedJustification = dart.test(isRTL) ? widget_layout_delegate._HorizontalJustification.rightDrawArea : widget_layout_delegate._HorizontalJustification.leftDrawArea;
          break;
        }
        case C29 || CT.C29:
        case C30 || CT.C30:
        {
          mappedJustification = dart.test(isRTL) ? widget_layout_delegate._HorizontalJustification.right : widget_layout_delegate._HorizontalJustification.left;
          break;
        }
        case C31 || CT.C31:
        {
          mappedJustification = dart.test(isRTL) ? widget_layout_delegate._HorizontalJustification.leftDrawArea : widget_layout_delegate._HorizontalJustification.rightDrawArea;
          break;
        }
        case C32 || CT.C32:
        {
          mappedJustification = dart.test(isRTL) ? widget_layout_delegate._HorizontalJustification.left : widget_layout_delegate._HorizontalJustification.right;
          break;
        }
      }
      return mappedJustification;
    }
  };
  (widget_layout_delegate.WidgetLayoutDelegate.new = function(chartID, idAndBehavior, isRTL) {
    this[chartID$] = chartID;
    this[idAndBehavior$] = idAndBehavior;
    this[isRTL$] = isRTL;
    widget_layout_delegate.WidgetLayoutDelegate.__proto__.new.call(this);
    ;
  }).prototype = widget_layout_delegate.WidgetLayoutDelegate.prototype;
  dart.addTypeTests(widget_layout_delegate.WidgetLayoutDelegate);
  dart.setMethodSignature(widget_layout_delegate.WidgetLayoutDelegate, () => ({
    __proto__: dart.getMethods(widget_layout_delegate.WidgetLayoutDelegate.__proto__),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [core.Object]),
    [_getBehaviorOffset]: dart.fnType(ui.Offset, [chart_behavior$.BuildableBehavior$(chart_behavior.ChartBehavior)], {behaviorSize: ui.Size, chartSize: ui.Size, isRTL: core.bool}, {}),
    getOutsideJustification: dart.fnType(widget_layout_delegate._HorizontalJustification, [chart_behavior.OutsideJustification, core.bool])
  }));
  dart.setLibraryUri(widget_layout_delegate.WidgetLayoutDelegate, "package:charts_flutter/src/widget_layout_delegate.dart");
  dart.setFieldSignature(widget_layout_delegate.WidgetLayoutDelegate, () => ({
    __proto__: dart.getFields(widget_layout_delegate.WidgetLayoutDelegate.__proto__),
    chartID: dart.finalFieldType(core.String),
    isRTL: dart.finalFieldType(dart.dynamic),
    idAndBehavior: dart.finalFieldType(core.Map$(core.String, chart_behavior$.BuildableBehavior$(chart_behavior.ChartBehavior)))
  }));
  let C35;
  widget_layout_delegate._HorizontalJustification = class _HorizontalJustification extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (widget_layout_delegate._HorizontalJustification.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = widget_layout_delegate._HorizontalJustification.prototype;
  dart.addTypeTests(widget_layout_delegate._HorizontalJustification);
  dart.setLibraryUri(widget_layout_delegate._HorizontalJustification, "package:charts_flutter/src/widget_layout_delegate.dart");
  dart.setFieldSignature(widget_layout_delegate._HorizontalJustification, () => ({
    __proto__: dart.getFields(widget_layout_delegate._HorizontalJustification.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(widget_layout_delegate._HorizontalJustification, ['toString']);
  widget_layout_delegate._HorizontalJustification.leftDrawArea = C23 || CT.C23;
  widget_layout_delegate._HorizontalJustification.left = C24 || CT.C24;
  widget_layout_delegate._HorizontalJustification.rightDrawArea = C25 || CT.C25;
  widget_layout_delegate._HorizontalJustification.right = C26 || CT.C26;
  widget_layout_delegate._HorizontalJustification.values = C35 || CT.C35;
  const _is_ChartBehavior_default = Symbol('_is_ChartBehavior_default');
  chart_behavior$.ChartBehavior$ = dart.generic(B => {
    class ChartBehavior extends core.Object {}
    (ChartBehavior.new = function() {
      ;
    }).prototype = ChartBehavior.prototype;
    dart.addTypeTests(ChartBehavior);
    ChartBehavior.prototype[_is_ChartBehavior_default] = true;
    dart.setLibraryUri(ChartBehavior, "package:charts_flutter/src/behaviors/chart_behavior.dart");
    return ChartBehavior;
  });
  chart_behavior$.ChartBehavior = chart_behavior$.ChartBehavior$();
  dart.addTypeTests(chart_behavior$.ChartBehavior, _is_ChartBehavior_default);
  const _is_ChartStateBehavior_default = Symbol('_is_ChartStateBehavior_default');
  chart_behavior$.ChartStateBehavior$ = dart.generic(B => {
    class ChartStateBehavior extends core.Object {}
    (ChartStateBehavior.new = function() {
      ;
    }).prototype = ChartStateBehavior.prototype;
    dart.addTypeTests(ChartStateBehavior);
    ChartStateBehavior.prototype[_is_ChartStateBehavior_default] = true;
    dart.setLibraryUri(ChartStateBehavior, "package:charts_flutter/src/behaviors/chart_behavior.dart");
    return ChartStateBehavior;
  });
  chart_behavior$.ChartStateBehavior = chart_behavior$.ChartStateBehavior$();
  dart.addTypeTests(chart_behavior$.ChartStateBehavior, _is_ChartStateBehavior_default);
  const _is_BuildableBehavior_default = Symbol('_is_BuildableBehavior_default');
  chart_behavior$.BuildableBehavior$ = dart.generic(B => {
    class BuildableBehavior extends core.Object {}
    (BuildableBehavior.new = function() {
      ;
    }).prototype = BuildableBehavior.prototype;
    dart.addTypeTests(BuildableBehavior);
    BuildableBehavior.prototype[_is_BuildableBehavior_default] = true;
    dart.setLibraryUri(BuildableBehavior, "package:charts_flutter/src/behaviors/chart_behavior.dart");
    return BuildableBehavior;
  });
  chart_behavior$.BuildableBehavior = chart_behavior$.BuildableBehavior$();
  dart.addTypeTests(chart_behavior$.BuildableBehavior, _is_BuildableBehavior_default);
  const _name$1 = dart.privateName(chart_behavior$, "_name");
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  chart_behavior$.GestureType = class GestureType extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (chart_behavior$.GestureType.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = chart_behavior$.GestureType.prototype;
  dart.addTypeTests(chart_behavior$.GestureType);
  dart.setLibraryUri(chart_behavior$.GestureType, "package:charts_flutter/src/behaviors/chart_behavior.dart");
  dart.setFieldSignature(chart_behavior$.GestureType, () => ({
    __proto__: dart.getFields(chart_behavior$.GestureType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(chart_behavior$.GestureType, ['toString']);
  chart_behavior$.GestureType.onLongPress = C36 || CT.C36;
  chart_behavior$.GestureType.onTap = C37 || CT.C37;
  chart_behavior$.GestureType.onHover = C38 || CT.C38;
  chart_behavior$.GestureType.onDrag = C39 || CT.C39;
  chart_behavior$.GestureType.values = C40 || CT.C40;
  const _listeningForLongPress = dart.privateName(chart_gesture_detector, "_listeningForLongPress");
  const _isDragging = dart.privateName(chart_gesture_detector, "_isDragging");
  const _longPressTimer = dart.privateName(chart_gesture_detector, "_longPressTimer");
  const _lastTapPoint = dart.privateName(chart_gesture_detector, "_lastTapPoint");
  const _lastScale = dart.privateName(chart_gesture_detector, "_lastScale");
  const _containerResolver = dart.privateName(chart_gesture_detector, "_containerResolver");
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C42;
  let C41;
  chart_gesture_detector.ChartGestureDetector = class ChartGestureDetector extends core.Object {
    makeWidget(context, chartContainer, desiredGestures) {
      this[_containerResolver] = dart.fn(() => util.getChartContainerRenderObject(box.RenderBox._check(context.findRenderObject())), VoidToChartContainerRenderObject());
      let wantTapDown = desiredGestures[$isNotEmpty];
      let wantTap = desiredGestures.contains(chart_behavior$.GestureType.onTap);
      let wantDrag = desiredGestures.contains(chart_behavior$.GestureType.onDrag);
      this[_listeningForLongPress] = desiredGestures.contains(chart_behavior$.GestureType.onLongPress);
      return new gesture_detector.GestureDetector.new({child: chartContainer, onTapDown: dart.test(wantTapDown) ? dart.bind(this, 'onTapDown') : null, onTapUp: dart.test(wantTap) ? dart.bind(this, 'onTapUp') : null, onScaleStart: dart.test(wantDrag) ? dart.bind(this, 'onScaleStart') : null, onScaleUpdate: dart.test(wantDrag) ? dart.bind(this, 'onScaleUpdate') : null, onScaleEnd: dart.test(wantDrag) ? dart.bind(this, 'onScaleEnd') : null, $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
    onTapDown(d) {
      let container = this[_containerResolver]();
      let localPosition = container.globalToLocal(d.globalPosition);
      this[_lastTapPoint] = new (PointOfdouble()).new(localPosition.dx, localPosition.dy);
      container.gestureProxy.onTapTest(this[_lastTapPoint]);
      if (dart.test(this[_listeningForLongPress])) {
        this[_longPressTimer] = async.Timer.new(chart_gesture_detector._kLongPressTimeout, dart.fn(() => {
          this.onLongPress();
          this[_longPressTimer] = null;
        }, VoidToNull()));
      }
    }
    onTapUp(d) {
      let t0;
      t0 = this[_longPressTimer];
      t0 == null ? null : t0.cancel();
      let container = this[_containerResolver]();
      let localPosition = container.globalToLocal(d.globalPosition);
      this[_lastTapPoint] = new (PointOfdouble()).new(localPosition.dx, localPosition.dy);
      container.gestureProxy.onTap(this[_lastTapPoint]);
    }
    onLongPress() {
      let container = this[_containerResolver]();
      container.gestureProxy.onLongPress(this[_lastTapPoint]);
    }
    onScaleStart(d) {
      let t0;
      t0 = this[_longPressTimer];
      t0 == null ? null : t0.cancel();
      let container = this[_containerResolver]();
      let localPosition = container.globalToLocal(d.focalPoint);
      this[_lastTapPoint] = new (PointOfdouble()).new(localPosition.dx, localPosition.dy);
      this[_isDragging] = container.gestureProxy.onDragStart(this[_lastTapPoint]);
    }
    onScaleUpdate(d) {
      if (!dart.test(this[_isDragging])) {
        return;
      }
      let container = this[_containerResolver]();
      let localPosition = container.globalToLocal(d.focalPoint);
      this[_lastTapPoint] = new (PointOfdouble()).new(localPosition.dx, localPosition.dy);
      this[_lastScale] = d.scale;
      container.gestureProxy.onDragUpdate(this[_lastTapPoint], d.scale);
    }
    onScaleEnd(d) {
      if (!dart.test(this[_isDragging])) {
        return;
      }
      let container = this[_containerResolver]();
      container.gestureProxy.onDragEnd(this[_lastTapPoint], this[_lastScale], d.velocity.pixelsPerSecond.dx);
    }
  };
  (chart_gesture_detector.ChartGestureDetector.new = function() {
    this[_listeningForLongPress] = null;
    this[_isDragging] = false;
    this[_longPressTimer] = null;
    this[_lastTapPoint] = null;
    this[_lastScale] = null;
    this[_containerResolver] = null;
    ;
  }).prototype = chart_gesture_detector.ChartGestureDetector.prototype;
  dart.addTypeTests(chart_gesture_detector.ChartGestureDetector);
  dart.setMethodSignature(chart_gesture_detector.ChartGestureDetector, () => ({
    __proto__: dart.getMethods(chart_gesture_detector.ChartGestureDetector.__proto__),
    makeWidget: dart.fnType(dart.dynamic, [framework.BuildContext, chart_container.ChartContainer, core.Set$(chart_behavior$.GestureType)]),
    onTapDown: dart.fnType(dart.void, [tap.TapDownDetails]),
    onTapUp: dart.fnType(dart.void, [tap.TapUpDetails]),
    onLongPress: dart.fnType(dart.void, []),
    onScaleStart: dart.fnType(dart.void, [scale.ScaleStartDetails]),
    onScaleUpdate: dart.fnType(dart.void, [scale.ScaleUpdateDetails]),
    onScaleEnd: dart.fnType(dart.void, [scale.ScaleEndDetails])
  }));
  dart.setLibraryUri(chart_gesture_detector.ChartGestureDetector, "package:charts_flutter/src/chart_gesture_detector.dart");
  dart.setFieldSignature(chart_gesture_detector.ChartGestureDetector, () => ({
    __proto__: dart.getFields(chart_gesture_detector.ChartGestureDetector.__proto__),
    [_listeningForLongPress]: dart.fieldType(core.bool),
    [_isDragging]: dart.fieldType(core.bool),
    [_longPressTimer]: dart.fieldType(async.Timer),
    [_lastTapPoint]: dart.fieldType(math.Point$(core.double)),
    [_lastScale]: dart.fieldType(core.double),
    [_containerResolver]: dart.fieldType(dart.fnType(chart_container.ChartContainerRenderObject, []))
  }));
  let C49;
  dart.defineLazy(chart_gesture_detector, {
    /*chart_gesture_detector._kLongPressTimeout*/get _kLongPressTimeout() {
      return C49 || CT.C49;
    }
  });
  util.getChartContainerRenderObject = function getChartContainerRenderObject(box) {
    if (!custom_layout.RenderCustomMultiChildLayoutBox.is(box)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/util.dart", 29, 10, "box is RenderCustomMultiChildLayoutBox");
    let semanticHandler = custom_layout.RenderCustomMultiChildLayoutBox.as(box).getChildrenAsList()[$firstWhere](dart.fn(child => proxy_box.RenderSemanticsGestureHandler.is(child), RenderBoxTobool()));
    if (!proxy_box.RenderSemanticsGestureHandler.is(semanticHandler)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/util.dart", 34, 10, "semanticHandler is RenderSemanticsGestureHandler");
    let renderPointerListener = proxy_box.RenderSemanticsGestureHandler.as(semanticHandler).child;
    if (!proxy_box.RenderPointerListener.is(renderPointerListener)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/util.dart", 38, 10, "renderPointerListener is RenderPointerListener");
    let chartContainerRenderObject = proxy_box.RenderPointerListener.as(renderPointerListener).child;
    if (!chart_container.ChartContainerRenderObject.is(chartContainerRenderObject)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/util.dart", 42, 10, "chartContainerRenderObject is ChartContainerRenderObject");
    return chart_container.ChartContainerRenderObject.as(chartContainerRenderObject);
  };
  const _is_ChartContainer_default = Symbol('_is_ChartContainer_default');
  const chartWidget$ = dart.privateName(chart_container, "ChartContainer.chartWidget");
  const oldChartWidget$ = dart.privateName(chart_container, "ChartContainer.oldChartWidget");
  const chartState$ = dart.privateName(chart_container, "ChartContainer.chartState");
  const animationValue$ = dart.privateName(chart_container, "ChartContainer.animationValue");
  const rtl$ = dart.privateName(chart_container, "ChartContainer.rtl");
  const rtlSpec$0 = dart.privateName(chart_container, "ChartContainer.rtlSpec");
  const userManagedState$0 = dart.privateName(chart_container, "ChartContainer.userManagedState");
  chart_container.ChartContainer$ = dart.generic(D => {
    let ChartContainerRenderObjectOfD = () => (ChartContainerRenderObjectOfD = dart.constFn(chart_container.ChartContainerRenderObject$(D)))();
    class ChartContainer extends basic.CustomPaint {
      get chartWidget() {
        return this[chartWidget$];
      }
      set chartWidget(value) {
        super.chartWidget = value;
      }
      get oldChartWidget() {
        return this[oldChartWidget$];
      }
      set oldChartWidget(value) {
        super.oldChartWidget = value;
      }
      get chartState() {
        return this[chartState$];
      }
      set chartState(value) {
        super.chartState = value;
      }
      get animationValue() {
        return this[animationValue$];
      }
      set animationValue(value) {
        super.animationValue = value;
      }
      get rtl() {
        return this[rtl$];
      }
      set rtl(value) {
        super.rtl = value;
      }
      get rtlSpec() {
        return this[rtlSpec$0];
      }
      set rtlSpec(value) {
        super.rtlSpec = value;
      }
      get userManagedState() {
        return this[userManagedState$0];
      }
      set userManagedState(value) {
        super.userManagedState = value;
      }
      createRenderObject(context) {
        let t0;
        t0 = new (ChartContainerRenderObjectOfD()).new();
        t0.reconfigure(this, context);
        return t0;
      }
      updateRenderObject(context, renderObject) {
        chart_container.ChartContainerRenderObject._check(renderObject);
        renderObject.reconfigure(this, context);
      }
    }
    (ChartContainer.new = function(opts) {
      let oldChartWidget = opts && 'oldChartWidget' in opts ? opts.oldChartWidget : null;
      let chartWidget = opts && 'chartWidget' in opts ? opts.chartWidget : null;
      let chartState = opts && 'chartState' in opts ? opts.chartState : null;
      let animationValue = opts && 'animationValue' in opts ? opts.animationValue : null;
      let rtl = opts && 'rtl' in opts ? opts.rtl : null;
      let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
      let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[oldChartWidget$] = oldChartWidget;
      this[chartWidget$] = chartWidget;
      this[chartState$] = chartState;
      this[animationValue$] = animationValue;
      this[rtl$] = rtl;
      this[rtlSpec$0] = rtlSpec;
      this[userManagedState$0] = userManagedState;
      ChartContainer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChartContainer.prototype;
    dart.addTypeTests(ChartContainer);
    ChartContainer.prototype[_is_ChartContainer_default] = true;
    dart.setLibraryUri(ChartContainer, "package:charts_flutter/src/chart_container.dart");
    dart.setFieldSignature(ChartContainer, () => ({
      __proto__: dart.getFields(ChartContainer.__proto__),
      chartWidget: dart.finalFieldType(base_chart$.BaseChart$(D)),
      oldChartWidget: dart.finalFieldType(base_chart$.BaseChart$(D)),
      chartState: dart.finalFieldType(chart_state.ChartState),
      animationValue: dart.finalFieldType(core.double),
      rtl: dart.finalFieldType(core.bool),
      rtlSpec: dart.finalFieldType(rtl_spec.RTLSpec),
      userManagedState: dart.finalFieldType(user_managed_state.UserManagedState$(D))
    }));
    return ChartContainer;
  });
  chart_container.ChartContainer = chart_container.ChartContainer$();
  dart.addTypeTests(chart_container.ChartContainer, _is_ChartContainer_default);
  const _chart = dart.privateName(chart_container, "_chart");
  const _seriesList = dart.privateName(chart_container, "_seriesList");
  const _chartState = dart.privateName(chart_container, "_chartState");
  const _chartContainerIsRtl = dart.privateName(chart_container, "_chartContainerIsRtl");
  const _rtlSpec = dart.privateName(chart_container, "_rtlSpec");
  const _dateTimeFactory = dart.privateName(chart_container, "_dateTimeFactory");
  const _exploreMode = dart.privateName(chart_container, "_exploreMode");
  const _a11yNodes = dart.privateName(chart_container, "_a11yNodes");
  const _log = dart.privateName(chart_container, "_log");
  const _lastConfigurationChangeTime = dart.privateName(chart_container, "_lastConfigurationChangeTime");
  const _name$2 = dart.privateName(rtl_spec, "_name");
  let C51;
  const RTLSpec_axisDirection = dart.privateName(rtl_spec, "RTLSpec.axisDirection");
  let C50;
  const _updateUserManagedState = dart.privateName(chart_container, "_updateUserManagedState");
  const _setNewPainter = dart.privateName(chart_container, "_setNewPainter");
  const _is_ChartContainerRenderObject_default = Symbol('_is_ChartContainerRenderObject_default');
  chart_container.ChartContainerRenderObject$ = dart.generic(D => {
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart.BaseChart$(D)))();
    let SeriesOfdynamic$D = () => (SeriesOfdynamic$D = dart.constFn(series.Series$(dart.dynamic, D)))();
    let ListOfSeriesOfdynamic$D = () => (ListOfSeriesOfdynamic$D = dart.constFn(core.List$(SeriesOfdynamic$D())))();
    let UserManagedStateOfD = () => (UserManagedStateOfD = dart.constFn(user_managed_state.UserManagedState$(D)))();
    class ChartContainerRenderObject extends custom_paint.RenderCustomPaint {
      reconfigure(config, context) {
        let t0, t0$;
        this[_chartState] = config.chartState;
        this[_dateTimeFactory] = time_series_chart$.TimeSeriesChart.is(config.chartWidget) ? time_series_chart$.TimeSeriesChart.as(config.chartWidget).dateTimeFactory : null;
        this[_dateTimeFactory] == null ? this[_dateTimeFactory] = new date_time_factory.LocalDateTimeFactory.new() : null;
        if (this[_chart] == null) {
          performance.Performance.time("chartsCreate");
          this[_chart] = BaseChartOfD()._check(config.chartWidget.createCommonChart(base_chart_state.BaseChartState._check(this[_chartState])));
          this[_chart].init(this, new graphics_factory$.GraphicsFactory.new(context));
          performance.Performance.timeEnd("chartsCreate");
        }
        performance.Performance.time("chartsConfig");
        config.chartWidget.updateCommonChart(this[_chart], config.oldChartWidget, base_chart_state.BaseChartState._check(this[_chartState]));
        this[_rtlSpec] = (t0 = config.rtlSpec, t0 == null ? C50 || CT.C50 : t0);
        this[_chartContainerIsRtl] = (t0$ = config.rtl, t0$ == null ? false : t0$);
        performance.Performance.timeEnd("chartsConfig");
        if (dart.test(this[_chartState].chartIsDirty)) {
          let currentTime = new core.DateTime.now();
          let lastConfigurationBelowThreshold = this[_lastConfigurationChangeTime] != null && dart.notNull(currentTime.difference(this[_lastConfigurationChangeTime]).inMilliseconds) < 500;
          this[_lastConfigurationChangeTime] = currentTime;
          if (lastConfigurationBelowThreshold) {
            this[_chartState].resetChartDirtyFlag();
            this[_log].warning("Chart configuration is changing more frequent than threshold" + " of " + dart.str(500) + ". Check if your behavior, axis," + " or renderer config is missing equality checks that may be causing" + " configuration to be detected as changed. ");
          }
        }
        if (dart.test(this[_chartState].chartIsDirty)) {
          this[_chart].configurationChanged();
        }
        if (!dart.equals(this[_seriesList], config.chartWidget.seriesList) || dart.test(this[_chartState].chartIsDirty)) {
          this[_chartState].resetChartDirtyFlag();
          this[_seriesList] = ListOfSeriesOfdynamic$D()._check(config.chartWidget.seriesList);
          this[_a11yNodes] = null;
          performance.Performance.time("chartsDraw");
          this[_chart].draw(this[_seriesList]);
          performance.Performance.timeEnd("chartsDraw");
          this[_chart].animationPercent = 0.0;
          this.markNeedsLayout();
        } else {
          this[_chart].animationPercent = config.animationValue;
          this.markNeedsPaint();
        }
        this[_updateUserManagedState](UserManagedStateOfD()._check(config.userManagedState));
        this[_setNewPainter]();
      }
      [_updateUserManagedState](newState) {
        if (newState == null) {
          return;
        }
        for (let type of newState.selectionModels[$keys]) {
          let model = this[_chart].getSelectionModel(type);
          let userModel = newState.selectionModels[$_get](type).getModel(this[_chart].currentSeriesList);
          if (!dart.equals(model, userModel)) {
            model.updateSelection(userModel.selectedDatum, userModel.selectedSeries);
          }
        }
      }
      performLayout() {
        performance.Performance.time("chartsLayout");
        this[_chart].measure(this.constraints.maxWidth[$toInt](), this.constraints.maxHeight[$toInt]());
        this[_chart].layout(this.constraints.maxWidth[$toInt](), this.constraints.maxHeight[$toInt]());
        performance.Performance.timeEnd("chartsLayout");
        this.size = this.constraints.biggest;
      }
      markNeedsLayout() {
        super.markNeedsLayout();
        if (this.parent != null) {
          this.markParentNeedsLayout();
        }
      }
      hitTestSelf(position) {
        return true;
      }
      requestRedraw() {
      }
      requestAnimation(transition) {
        const startAnimationController = _ => {
          this[_chartState].setAnimation(transition);
        };
        dart.fn(startAnimationController, dynamicTovoid());
        if (!dart.test(binding.SchedulerBinding.instance.hasScheduledFrame)) {
          binding.SchedulerBinding.instance.scheduleFrame();
        }
        binding.SchedulerBinding.instance.addPostFrameCallback(startAnimationController);
      }
      requestRebuild() {
        const doRebuild = _ => {
          this[_chartState].requestRebuild();
        };
        dart.fn(doRebuild, dynamicTovoid());
        binding.SchedulerBinding.instance.addPostFrameCallback(doRebuild);
      }
      requestPaint() {
        this.markNeedsPaint();
      }
      get pixelsPerDp() {
        return 1.0;
      }
      get chartContainerIsRtl() {
        return this[_chartContainerIsRtl];
      }
      get rtlSpec() {
        return this[_rtlSpec];
      }
      get isRtl() {
        let t0;
        return dart.test(this[_chartContainerIsRtl]) && dart.equals((t0 = this[_rtlSpec], t0 == null ? null : t0.axisDirection), rtl_spec.AxisDirection.reversed);
      }
      get isTappable() {
        return this[_chart].isTappable;
      }
      get dateTimeFactory() {
        return this[_dateTimeFactory];
      }
      get gestureProxy() {
        return this[_chart].gestureProxy;
      }
      get textDirection() {
        return dart.test(this[_chartContainerIsRtl]) ? ui.TextDirection.rtl : ui.TextDirection.ltr;
      }
      enableA11yExploreMode(nodes, opts) {
        let announcement = opts && 'announcement' in opts ? opts.announcement : null;
        this[_a11yNodes] = nodes;
        this[_exploreMode] = true;
        this[_setNewPainter]();
        this.requestRebuild();
        if (announcement != null) {
          semantics_service.SemanticsService.announce(announcement, this.textDirection);
        }
      }
      disableA11yExploreMode(opts) {
        let announcement = opts && 'announcement' in opts ? opts.announcement : null;
        this[_a11yNodes] = JSArrayOfA11yNode().of([]);
        this[_exploreMode] = false;
        this[_setNewPainter]();
        this.requestRebuild();
        if (announcement != null) {
          semantics_service.SemanticsService.announce(announcement, this.textDirection);
        }
      }
      [_setNewPainter]() {
        this.painter = chart_container.ChartContainerCustomPaint.new({oldPainter: chart_container.ChartContainerCustomPaint._check(this.painter), chart: this[_chart], exploreMode: this[_exploreMode], a11yNodes: this[_a11yNodes], textDirection: this.textDirection});
      }
    }
    (ChartContainerRenderObject.new = function() {
      this[_chart] = null;
      this[_seriesList] = null;
      this[_chartState] = null;
      this[_chartContainerIsRtl] = false;
      this[_rtlSpec] = null;
      this[_dateTimeFactory] = null;
      this[_exploreMode] = false;
      this[_a11yNodes] = null;
      this[_log] = logging.Logger.new("charts_flutter.charts_container");
      this[_lastConfigurationChangeTime] = null;
      ChartContainerRenderObject.__proto__.new.call(this);
      ;
    }).prototype = ChartContainerRenderObject.prototype;
    dart.addTypeTests(ChartContainerRenderObject);
    ChartContainerRenderObject.prototype[_is_ChartContainerRenderObject_default] = true;
    ChartContainerRenderObject[dart.implements] = () => [chart_context.ChartContext];
    dart.setMethodSignature(ChartContainerRenderObject, () => ({
      __proto__: dart.getMethods(ChartContainerRenderObject.__proto__),
      reconfigure: dart.fnType(dart.void, [chart_container.ChartContainer, framework.BuildContext]),
      [_updateUserManagedState]: dart.fnType(dart.dynamic, [user_managed_state.UserManagedState$(D)]),
      requestRedraw: dart.fnType(dart.void, []),
      requestAnimation: dart.fnType(dart.void, [core.Duration]),
      requestRebuild: dart.fnType(dart.void, []),
      requestPaint: dart.fnType(dart.void, []),
      enableA11yExploreMode: dart.fnType(dart.void, [core.List$(a11y_node.A11yNode)], {announcement: core.String}, {}),
      disableA11yExploreMode: dart.fnType(dart.void, [], {announcement: core.String}, {}),
      [_setNewPainter]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ChartContainerRenderObject, () => ({
      __proto__: dart.getGetters(ChartContainerRenderObject.__proto__),
      pixelsPerDp: core.double,
      chartContainerIsRtl: core.bool,
      rtlSpec: rtl_spec.RTLSpec,
      isRtl: core.bool,
      isTappable: core.bool,
      dateTimeFactory: date_time_factory.DateTimeFactory,
      gestureProxy: proxy_gesture_listener.ProxyGestureListener,
      textDirection: ui.TextDirection
    }));
    dart.setLibraryUri(ChartContainerRenderObject, "package:charts_flutter/src/chart_container.dart");
    dart.setFieldSignature(ChartContainerRenderObject, () => ({
      __proto__: dart.getFields(ChartContainerRenderObject.__proto__),
      [_chart]: dart.fieldType(base_chart.BaseChart$(D)),
      [_seriesList]: dart.fieldType(core.List$(series.Series$(dart.dynamic, D))),
      [_chartState]: dart.fieldType(chart_state.ChartState),
      [_chartContainerIsRtl]: dart.fieldType(core.bool),
      [_rtlSpec]: dart.fieldType(rtl_spec.RTLSpec),
      [_dateTimeFactory]: dart.fieldType(date_time_factory.DateTimeFactory),
      [_exploreMode]: dart.fieldType(core.bool),
      [_a11yNodes]: dart.fieldType(core.List$(a11y_node.A11yNode)),
      [_log]: dart.finalFieldType(logging.Logger),
      [_lastConfigurationChangeTime]: dart.fieldType(core.DateTime)
    }));
    return ChartContainerRenderObject;
  });
  chart_container.ChartContainerRenderObject = chart_container.ChartContainerRenderObject$();
  dart.defineLazy(chart_container.ChartContainerRenderObject, {
    /*chart_container.ChartContainerRenderObject.configurationChangeThresholdMs*/get configurationChangeThresholdMs() {
      return 500;
    }
  });
  dart.addTypeTests(chart_container.ChartContainerRenderObject, _is_ChartContainerRenderObject_default);
  const _buildSemantics = dart.privateName(chart_container, "_buildSemantics");
  const chart$ = dart.privateName(chart_container, "ChartContainerCustomPaint.chart");
  const exploreMode$ = dart.privateName(chart_container, "ChartContainerCustomPaint.exploreMode");
  const a11yNodes$ = dart.privateName(chart_container, "ChartContainerCustomPaint.a11yNodes");
  const textDirection$ = dart.privateName(chart_container, "ChartContainerCustomPaint.textDirection");
  chart_container.ChartContainerCustomPaint = class ChartContainerCustomPaint extends custom_paint.CustomPainter {
    get chart() {
      return this[chart$];
    }
    set chart(value) {
      super.chart = value;
    }
    get exploreMode() {
      return this[exploreMode$];
    }
    set exploreMode(value) {
      super.exploreMode = value;
    }
    get a11yNodes() {
      return this[a11yNodes$];
    }
    set a11yNodes(value) {
      super.a11yNodes = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static new(opts) {
      let t0, t0$, t0$0;
      let oldPainter = opts && 'oldPainter' in opts ? opts.oldPainter : null;
      let chart = opts && 'chart' in opts ? opts.chart : null;
      let exploreMode = opts && 'exploreMode' in opts ? opts.exploreMode : null;
      let a11yNodes = opts && 'a11yNodes' in opts ? opts.a11yNodes : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (oldPainter != null && dart.equals(oldPainter.exploreMode, exploreMode) && dart.equals(oldPainter.a11yNodes, a11yNodes) && dart.equals(oldPainter.textDirection, textDirection)) {
        return oldPainter;
      } else {
        return new chart_container.ChartContainerCustomPaint._internal({chart: chart, exploreMode: (t0 = exploreMode, t0 == null ? false : t0), a11yNodes: (t0$ = a11yNodes, t0$ == null ? JSArrayOfA11yNode().of([]) : t0$), textDirection: (t0$0 = textDirection, t0$0 == null ? ui.TextDirection.ltr : t0$0)});
      }
    }
    paint(canvas, size) {
      performance.Performance.time("chartsPaint");
      let chartsCanvas = new chart_canvas$.ChartCanvas.new(canvas, this.chart.graphicsFactory);
      this.chart.paint(chartsCanvas);
      performance.Performance.timeEnd("chartsPaint");
    }
    shouldRepaint(oldPainter) {
      chart_container.ChartContainerCustomPaint._check(oldPainter);
      return false;
    }
    shouldRebuildSemantics(oldDelegate) {
      chart_container.ChartContainerCustomPaint._check(oldDelegate);
      return !dart.equals(this.exploreMode, oldDelegate.exploreMode) || !dart.equals(this.a11yNodes, oldDelegate.a11yNodes) || !dart.equals(this.textDirection, this.textDirection);
    }
    get semanticsBuilder() {
      return dart.bind(this, _buildSemantics);
    }
    [_buildSemantics](size) {
      let nodes = JSArrayOfCustomPainterSemantics().of([]);
      for (let node of this.a11yNodes) {
        let rect = new ui.Rect.fromLTWH(node.boundingBox[$left][$toDouble](), node.boundingBox[$top][$toDouble](), node.boundingBox[$width][$toDouble](), node.boundingBox[$height][$toDouble]());
        nodes[$add](new custom_paint.CustomPainterSemantics.new({rect: rect, properties: new semantics.SemanticsProperties.new({value: node.label, textDirection: this.textDirection, onDidGainAccessibilityFocus: node.onFocus})}));
      }
      return nodes;
    }
  };
  (chart_container.ChartContainerCustomPaint._internal = function(opts) {
    let chart = opts && 'chart' in opts ? opts.chart : null;
    let exploreMode = opts && 'exploreMode' in opts ? opts.exploreMode : null;
    let a11yNodes = opts && 'a11yNodes' in opts ? opts.a11yNodes : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[chart$] = chart;
    this[exploreMode$] = exploreMode;
    this[a11yNodes$] = a11yNodes;
    this[textDirection$] = textDirection;
    chart_container.ChartContainerCustomPaint.__proto__.new.call(this);
    ;
  }).prototype = chart_container.ChartContainerCustomPaint.prototype;
  dart.addTypeTests(chart_container.ChartContainerCustomPaint);
  dart.setMethodSignature(chart_container.ChartContainerCustomPaint, () => ({
    __proto__: dart.getMethods(chart_container.ChartContainerCustomPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    [_buildSemantics]: dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size])
  }));
  dart.setLibraryUri(chart_container.ChartContainerCustomPaint, "package:charts_flutter/src/chart_container.dart");
  dart.setFieldSignature(chart_container.ChartContainerCustomPaint, () => ({
    __proto__: dart.getFields(chart_container.ChartContainerCustomPaint.__proto__),
    chart: dart.finalFieldType(base_chart.BaseChart),
    exploreMode: dart.finalFieldType(core.bool),
    a11yNodes: dart.finalFieldType(core.List$(a11y_node.A11yNode)),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  const dateTimeFactory$ = dart.privateName(time_series_chart$, "TimeSeriesChart.dateTimeFactory");
  time_series_chart$.TimeSeriesChart = class TimeSeriesChart extends cartesian_chart$.CartesianChart$(core.DateTime) {
    get dateTimeFactory() {
      return this[dateTimeFactory$];
    }
    set dateTimeFactory(value) {
      super.dateTimeFactory = value;
    }
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new time_series_chart.TimeSeriesChart.new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis())), disjointMeasureAxes: this.createDisjointMeasureAxes()});
    }
    addDefaultInteractions(behaviors) {
      super.addDefaultInteractions(behaviors);
      behaviors[$add](new line_point_highlighter$.LinePointHighlighter.new());
    }
  };
  (time_series_chart$.TimeSeriesChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let disjointMeasureAxes = opts && 'disjointMeasureAxes' in opts ? opts.disjointMeasureAxes : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let dateTimeFactory = opts && 'dateTimeFactory' in opts ? opts.dateTimeFactory : null;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let flipVerticalAxis = opts && 'flipVerticalAxis' in opts ? opts.flipVerticalAxis : null;
    let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[dateTimeFactory$] = dateTimeFactory;
    time_series_chart$.TimeSeriesChart.__proto__.new.call(this, seriesList, {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, disjointMeasureAxes: disjointMeasureAxes, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, flipVerticalAxis: flipVerticalAxis, userManagedState: userManagedState, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = time_series_chart$.TimeSeriesChart.prototype;
  dart.addTypeTests(time_series_chart$.TimeSeriesChart);
  dart.setMethodSignature(time_series_chart$.TimeSeriesChart, () => ({
    __proto__: dart.getMethods(time_series_chart$.TimeSeriesChart.__proto__),
    createCommonChart: dart.fnType(time_series_chart.TimeSeriesChart, [core.Object])
  }));
  dart.setLibraryUri(time_series_chart$.TimeSeriesChart, "package:charts_flutter/src/time_series_chart.dart");
  dart.setFieldSignature(time_series_chart$.TimeSeriesChart, () => ({
    __proto__: dart.getFields(time_series_chart$.TimeSeriesChart.__proto__),
    dateTimeFactory: dart.finalFieldType(date_time_factory.DateTimeFactory)
  }));
  const desiredGestures = dart.privateName(line_point_highlighter$, "LinePointHighlighter.desiredGestures");
  const selectionModelType$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.selectionModelType");
  const defaultRadiusPx$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.defaultRadiusPx");
  const radiusPaddingPx$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.radiusPaddingPx");
  const showHorizontalFollowLine$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.showHorizontalFollowLine");
  const showVerticalFollowLine$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.showVerticalFollowLine");
  const dashPattern$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.dashPattern");
  const drawFollowLinesAcrossChart$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.drawFollowLinesAcrossChart");
  const symbolRenderer$ = dart.privateName(line_point_highlighter$, "LinePointHighlighter.symbolRenderer");
  line_point_highlighter$.LinePointHighlighter = class LinePointHighlighter extends chart_behavior$.ChartBehavior$(line_point_highlighter.LinePointHighlighter) {
    get desiredGestures() {
      return this[desiredGestures];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    get defaultRadiusPx() {
      return this[defaultRadiusPx$];
    }
    set defaultRadiusPx(value) {
      super.defaultRadiusPx = value;
    }
    get radiusPaddingPx() {
      return this[radiusPaddingPx$];
    }
    set radiusPaddingPx(value) {
      super.radiusPaddingPx = value;
    }
    get showHorizontalFollowLine() {
      return this[showHorizontalFollowLine$];
    }
    set showHorizontalFollowLine(value) {
      super.showHorizontalFollowLine = value;
    }
    get showVerticalFollowLine() {
      return this[showVerticalFollowLine$];
    }
    set showVerticalFollowLine(value) {
      super.showVerticalFollowLine = value;
    }
    get dashPattern() {
      return this[dashPattern$];
    }
    set dashPattern(value) {
      super.dashPattern = value;
    }
    get drawFollowLinesAcrossChart() {
      return this[drawFollowLinesAcrossChart$];
    }
    set drawFollowLinesAcrossChart(value) {
      super.drawFollowLinesAcrossChart = value;
    }
    get symbolRenderer() {
      return this[symbolRenderer$];
    }
    set symbolRenderer(value) {
      super.symbolRenderer = value;
    }
    createCommonBehavior(D) {
      return new (line_point_highlighter.LinePointHighlighter$(D)).new({selectionModelType: this.selectionModelType, defaultRadiusPx: this.defaultRadiusPx, radiusPaddingPx: this.radiusPaddingPx, showHorizontalFollowLine: this.showHorizontalFollowLine, showVerticalFollowLine: this.showVerticalFollowLine, dashPattern: this.dashPattern, drawFollowLinesAcrossChart: this.drawFollowLinesAcrossChart, symbolRenderer: this.symbolRenderer});
    }
    updateCommonBehavior(commonBehavior) {
      line_point_highlighter.LinePointHighlighter._check(commonBehavior);
    }
    get role() {
      return "LinePointHighlighter-" + dart.str(dart.toString(this.selectionModelType));
    }
    _equals(o) {
      if (o == null) return false;
      return line_point_highlighter$.LinePointHighlighter.is(o) && this.defaultRadiusPx == o.defaultRadiusPx && this.radiusPaddingPx == o.radiusPaddingPx && dart.equals(this.showHorizontalFollowLine, o.showHorizontalFollowLine) && dart.equals(this.showVerticalFollowLine, o.showVerticalFollowLine) && dart.equals(this.selectionModelType, o.selectionModelType) && dart.test(new equality.ListEquality.new().equals(this.dashPattern, o.dashPattern)) && dart.equals(this.drawFollowLinesAcrossChart, o.drawFollowLinesAcrossChart);
    }
    get hashCode() {
      return ui.hashValues(this.selectionModelType, this.defaultRadiusPx, this.radiusPaddingPx, this.showHorizontalFollowLine, this.showVerticalFollowLine, this.dashPattern, this.drawFollowLinesAcrossChart);
    }
  };
  (line_point_highlighter$.LinePointHighlighter.new = function(opts) {
    let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : null;
    let defaultRadiusPx = opts && 'defaultRadiusPx' in opts ? opts.defaultRadiusPx : null;
    let radiusPaddingPx = opts && 'radiusPaddingPx' in opts ? opts.radiusPaddingPx : null;
    let showHorizontalFollowLine = opts && 'showHorizontalFollowLine' in opts ? opts.showHorizontalFollowLine : null;
    let showVerticalFollowLine = opts && 'showVerticalFollowLine' in opts ? opts.showVerticalFollowLine : null;
    let dashPattern = opts && 'dashPattern' in opts ? opts.dashPattern : null;
    let drawFollowLinesAcrossChart = opts && 'drawFollowLinesAcrossChart' in opts ? opts.drawFollowLinesAcrossChart : null;
    let symbolRenderer = opts && 'symbolRenderer' in opts ? opts.symbolRenderer : null;
    this[desiredGestures] = new (_HashSetOfGestureType()).new();
    this[selectionModelType$] = selectionModelType;
    this[defaultRadiusPx$] = defaultRadiusPx;
    this[radiusPaddingPx$] = radiusPaddingPx;
    this[showHorizontalFollowLine$] = showHorizontalFollowLine;
    this[showVerticalFollowLine$] = showVerticalFollowLine;
    this[dashPattern$] = dashPattern;
    this[drawFollowLinesAcrossChart$] = drawFollowLinesAcrossChart;
    this[symbolRenderer$] = symbolRenderer;
    ;
  }).prototype = line_point_highlighter$.LinePointHighlighter.prototype;
  dart.addTypeTests(line_point_highlighter$.LinePointHighlighter);
  dart.setMethodSignature(line_point_highlighter$.LinePointHighlighter, () => ({
    __proto__: dart.getMethods(line_point_highlighter$.LinePointHighlighter.__proto__),
    createCommonBehavior: dart.gFnType(D => [line_point_highlighter.LinePointHighlighter$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(line_point_highlighter$.LinePointHighlighter, () => ({
    __proto__: dart.getGetters(line_point_highlighter$.LinePointHighlighter.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(line_point_highlighter$.LinePointHighlighter, "package:charts_flutter/src/behaviors/line_point_highlighter.dart");
  dart.setFieldSignature(line_point_highlighter$.LinePointHighlighter, () => ({
    __proto__: dart.getFields(line_point_highlighter$.LinePointHighlighter.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType),
    defaultRadiusPx: dart.finalFieldType(core.double),
    radiusPaddingPx: dart.finalFieldType(core.double),
    showHorizontalFollowLine: dart.finalFieldType(line_point_highlighter.LinePointHighlighterFollowLineType),
    showVerticalFollowLine: dart.finalFieldType(line_point_highlighter.LinePointHighlighterFollowLineType),
    dashPattern: dart.finalFieldType(core.List$(core.int)),
    drawFollowLinesAcrossChart: dart.finalFieldType(core.bool),
    symbolRenderer: dart.finalFieldType(symbol_renderer.SymbolRenderer)
  }));
  dart.defineExtensionMethods(line_point_highlighter$.LinePointHighlighter, ['_equals']);
  dart.defineExtensionAccessors(line_point_highlighter$.LinePointHighlighter, ['hashCode']);
  let C52;
  const textScaleFactor = dart.privateName(graphics_factory$, "GraphicsFactory.textScaleFactor");
  const defaultTextStyle = dart.privateName(graphics_factory$, "GraphicsFactory.defaultTextStyle");
  graphics_factory$.GraphicsFactory = class GraphicsFactory extends core.Object {
    get textScaleFactor() {
      return this[textScaleFactor];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get defaultTextStyle() {
      return this[defaultTextStyle];
    }
    set defaultTextStyle(value) {
      super.defaultTextStyle = value;
    }
    createTextPaint() {
      let t0;
      t0 = new text_style$0.TextStyle.new();
      t0.fontFamily = this.defaultTextStyle.style.fontFamily;
      return t0;
    }
    createTextElement(text) {
      let t0;
      t0 = new text_element$.TextElement.new(text, {textScaleFactor: this.textScaleFactor});
      t0.textStyle = this.createTextPaint();
      return t0;
    }
    createLinePaint() {
      return new line_style$.LineStyle.new();
    }
  };
  (graphics_factory$.GraphicsFactory.new = function(context, opts) {
    let helper = opts && 'helper' in opts ? opts.helper : C52 || CT.C52;
    this[textScaleFactor] = helper.getTextScaleFactorOf(context);
    this[defaultTextStyle] = text.DefaultTextStyle.of(context);
    ;
  }).prototype = graphics_factory$.GraphicsFactory.prototype;
  dart.addTypeTests(graphics_factory$.GraphicsFactory);
  graphics_factory$.GraphicsFactory[dart.implements] = () => [graphics_factory.GraphicsFactory];
  dart.setMethodSignature(graphics_factory$.GraphicsFactory, () => ({
    __proto__: dart.getMethods(graphics_factory$.GraphicsFactory.__proto__),
    createTextPaint: dart.fnType(text_style.TextStyle, []),
    createTextElement: dart.fnType(text_element.TextElement, [core.String]),
    createLinePaint: dart.fnType(line_style.LineStyle, [])
  }));
  dart.setLibraryUri(graphics_factory$.GraphicsFactory, "package:charts_flutter/src/graphics_factory.dart");
  dart.setFieldSignature(graphics_factory$.GraphicsFactory, () => ({
    __proto__: dart.getFields(graphics_factory$.GraphicsFactory.__proto__),
    textScaleFactor: dart.finalFieldType(core.double),
    defaultTextStyle: dart.finalFieldType(text.DefaultTextStyle)
  }));
  graphics_factory$.GraphicsFactoryHelper = class GraphicsFactoryHelper extends core.Object {
    getTextScaleFactorOf(context) {
      return media_query.MediaQuery.textScaleFactorOf(context);
    }
  };
  (graphics_factory$.GraphicsFactoryHelper.new = function() {
    ;
  }).prototype = graphics_factory$.GraphicsFactoryHelper.prototype;
  dart.addTypeTests(graphics_factory$.GraphicsFactoryHelper);
  dart.setMethodSignature(graphics_factory$.GraphicsFactoryHelper, () => ({
    __proto__: dart.getMethods(graphics_factory$.GraphicsFactoryHelper.__proto__),
    getTextScaleFactorOf: dart.fnType(core.double, [framework.BuildContext])
  }));
  dart.setLibraryUri(graphics_factory$.GraphicsFactoryHelper, "package:charts_flutter/src/graphics_factory.dart");
  const fontSize = dart.privateName(text_style$0, "TextStyle.fontSize");
  const fontFamily = dart.privateName(text_style$0, "TextStyle.fontFamily");
  const color$1 = dart.privateName(text_style$0, "TextStyle.color");
  const lineHeight = dart.privateName(text_style$0, "TextStyle.lineHeight");
  text_style$0.TextStyle = class TextStyle extends core.Object {
    get fontSize() {
      return this[fontSize];
    }
    set fontSize(value) {
      this[fontSize] = value;
    }
    get fontFamily() {
      return this[fontFamily];
    }
    set fontFamily(value) {
      this[fontFamily] = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      this[color$1] = value;
    }
    get lineHeight() {
      return this[lineHeight];
    }
    set lineHeight(value) {
      this[lineHeight] = value;
    }
    _equals(other) {
      if (other == null) return false;
      return text_style$0.TextStyle.is(other) && this.fontSize == other.fontSize && this.fontFamily == other.fontFamily && dart.equals(this.color, other.color) && this.lineHeight == other.lineHeight;
    }
    get hashCode() {
      return ui.hashValues(this.fontSize, this.fontFamily, this.color, this.lineHeight);
    }
  };
  (text_style$0.TextStyle.new = function() {
    this[fontSize] = null;
    this[fontFamily] = null;
    this[color$1] = null;
    this[lineHeight] = null;
    ;
  }).prototype = text_style$0.TextStyle.prototype;
  dart.addTypeTests(text_style$0.TextStyle);
  text_style$0.TextStyle[dart.implements] = () => [text_style.TextStyle];
  dart.setMethodSignature(text_style$0.TextStyle, () => ({
    __proto__: dart.getMethods(text_style$0.TextStyle.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(text_style$0.TextStyle, "package:charts_flutter/src/text_style.dart");
  dart.setFieldSignature(text_style$0.TextStyle, () => ({
    __proto__: dart.getFields(text_style$0.TextStyle.__proto__),
    fontSize: dart.fieldType(core.int),
    fontFamily: dart.fieldType(core.String),
    color: dart.fieldType(color$.Color),
    lineHeight: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(text_style$0.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(text_style$0.TextStyle, ['hashCode']);
  const _painterReady = dart.privateName(text_element$, "_painterReady");
  const _textDirection = dart.privateName(text_element$, "_textDirection");
  const _maxWidth = dart.privateName(text_element$, "_maxWidth");
  const _maxWidthStrategy = dart.privateName(text_element$, "_maxWidthStrategy");
  const _textPainter = dart.privateName(text_element$, "_textPainter");
  const _measurement = dart.privateName(text_element$, "_measurement");
  const _opacity = dart.privateName(text_element$, "_opacity");
  const _textStyle = dart.privateName(text_element$, "_textStyle");
  const _refreshPainter = dart.privateName(text_element$, "_refreshPainter");
  const text$ = dart.privateName(text_element$, "TextElement.text");
  const textScaleFactor$ = dart.privateName(text_element$, "TextElement.textScaleFactor");
  text_element$.TextElement = class TextElement extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get textStyle() {
      return this[_textStyle];
    }
    set textStyle(value) {
      if (dart.equals(this[_textStyle], value)) {
        return;
      }
      this[_textStyle] = value;
      this[_painterReady] = false;
    }
    set textDirection(direction) {
      if (dart.equals(this[_textDirection], direction)) {
        return;
      }
      this[_textDirection] = direction;
      this[_painterReady] = false;
    }
    get textDirection() {
      return this[_textDirection];
    }
    get maxWidth() {
      return this[_maxWidth];
    }
    set maxWidth(value) {
      if (this[_maxWidth] == value) {
        return;
      }
      this[_maxWidth] = value;
      this[_painterReady] = false;
    }
    get maxWidthStrategy() {
      return this[_maxWidthStrategy];
    }
    set maxWidthStrategy(maxWidthStrategy) {
      if (dart.equals(this[_maxWidthStrategy], maxWidthStrategy)) {
        return;
      }
      this[_maxWidthStrategy] = maxWidthStrategy;
      this[_painterReady] = false;
    }
    set opacity(opacity) {
      if (opacity != this[_opacity]) {
        this[_painterReady] = false;
        this[_opacity] = opacity;
      }
    }
    get measurement() {
      if (!dart.test(this[_painterReady])) {
        this[_refreshPainter]();
      }
      return this[_measurement];
    }
    get verticalFontShift() {
      if (!dart.test(this[_painterReady])) {
        this[_refreshPainter]();
      }
      return (dart.notNull(this[_textPainter].height) * 0.1)[$ceil]();
    }
    get textPainter() {
      if (!dart.test(this[_painterReady])) {
        this[_refreshPainter]();
      }
      return this[_textPainter];
    }
    [_refreshPainter]() {
      let t0, t0$, t0$0;
      this[_opacity] == null ? this[_opacity] = 1.0 : null;
      let color = new ui.Color.fromARGB((dart.notNull(this.textStyle.color.a) * dart.notNull(this[_opacity]))[$round](), this.textStyle.color.r, this.textStyle.color.g, this.textStyle.color.b);
      this[_textPainter] = (t0 = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: this.text, style: new text_style$.TextStyle.new({color: color, fontSize: this.textStyle.fontSize[$toDouble](), fontFamily: this.textStyle.fontFamily, height: this.textStyle.lineHeight})})}), t0.textDirection = ui.TextDirection.ltr, t0.textAlign = ui.TextAlign.left, t0.ellipsis = dart.equals(this.maxWidthStrategy, text_element.MaxWidthStrategy.ellipsize) ? "…" : null, t0);
      if (this.textScaleFactor != null) {
        this[_textPainter].textScaleFactor = this.textScaleFactor;
      }
      this[_textPainter].layout({maxWidth: (t0$0 = (t0$ = this.maxWidth, t0$ == null ? null : t0$[$toDouble]()), t0$0 == null ? 1 / 0 : t0$0)});
      let baseline = this[_textPainter].computeDistanceToActualBaseline(ui.TextBaseline.alphabetic);
      this[_measurement] = new text_measurement.TextMeasurement.new({horizontalSliceWidth: this[_textPainter].width, verticalSliceWidth: dart.notNull(this[_textPainter].height) * 0.7, baseline: baseline});
      this[_painterReady] = true;
    }
  };
  (text_element$.TextElement.new = function(text, opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    this[_painterReady] = false;
    this[_textDirection] = text_element.TextDirection.ltr;
    this[_maxWidth] = null;
    this[_maxWidthStrategy] = null;
    this[_textPainter] = null;
    this[_measurement] = null;
    this[_opacity] = null;
    this[text$] = text;
    this[textScaleFactor$] = textScaleFactor;
    this[_textStyle] = style;
    ;
  }).prototype = text_element$.TextElement.prototype;
  dart.addTypeTests(text_element$.TextElement);
  text_element$.TextElement[dart.implements] = () => [text_element.TextElement];
  dart.setMethodSignature(text_element$.TextElement, () => ({
    __proto__: dart.getMethods(text_element$.TextElement.__proto__),
    [_refreshPainter]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_element$.TextElement, () => ({
    __proto__: dart.getGetters(text_element$.TextElement.__proto__),
    textStyle: text_style.TextStyle,
    textDirection: text_element.TextDirection,
    maxWidth: core.int,
    maxWidthStrategy: text_element.MaxWidthStrategy,
    measurement: text_measurement.TextMeasurement,
    verticalFontShift: core.int,
    textPainter: text_painter.TextPainter
  }));
  dart.setSetterSignature(text_element$.TextElement, () => ({
    __proto__: dart.getSetters(text_element$.TextElement.__proto__),
    textStyle: text_style.TextStyle,
    textDirection: text_element.TextDirection,
    maxWidth: core.int,
    maxWidthStrategy: text_element.MaxWidthStrategy,
    opacity: core.double
  }));
  dart.setLibraryUri(text_element$.TextElement, "package:charts_flutter/src/text_element.dart");
  dart.setFieldSignature(text_element$.TextElement, () => ({
    __proto__: dart.getFields(text_element$.TextElement.__proto__),
    text: dart.finalFieldType(core.String),
    textScaleFactor: dart.finalFieldType(core.double),
    [_painterReady]: dart.fieldType(core.bool),
    [_textStyle]: dart.fieldType(text_style.TextStyle),
    [_textDirection]: dart.fieldType(text_element.TextDirection),
    [_maxWidth]: dart.fieldType(core.int),
    [_maxWidthStrategy]: dart.fieldType(text_element.MaxWidthStrategy),
    [_textPainter]: dart.fieldType(text_painter.TextPainter),
    [_measurement]: dart.fieldType(text_measurement.TextMeasurement),
    [_opacity]: dart.fieldType(core.double)
  }));
  dart.defineLazy(text_element$.TextElement, {
    /*text_element$.TextElement.ellipsis*/get ellipsis() {
      return "…";
    }
  });
  chart_state.ChartState = class ChartState extends core.Object {};
  (chart_state.ChartState.new = function() {
    ;
  }).prototype = chart_state.ChartState.prototype;
  dart.addTypeTests(chart_state.ChartState);
  dart.setLibraryUri(chart_state.ChartState, "package:charts_flutter/src/chart_state.dart");
  const _paint = dart.privateName(chart_canvas$, "_paint");
  const _circleSectorPainter = dart.privateName(chart_canvas$, "_circleSectorPainter");
  const _linePainter = dart.privateName(chart_canvas$, "_linePainter");
  const _piePainter = dart.privateName(chart_canvas$, "_piePainter");
  const _pointPainter = dart.privateName(chart_canvas$, "_pointPainter");
  const _polygonPainter = dart.privateName(chart_canvas$, "_polygonPainter");
  const _createHintGradient = dart.privateName(chart_canvas$, "_createHintGradient");
  const _drawForwardHatchPattern = dart.privateName(chart_canvas$, "_drawForwardHatchPattern");
  const _name$3 = dart.privateName(chart_canvas, "_name");
  let C53;
  const _getRect = dart.privateName(chart_canvas$, "_getRect");
  let C54;
  const _getRRect = dart.privateName(chart_canvas$, "_getRRect");
  const canvas$ = dart.privateName(chart_canvas$, "ChartCanvas.canvas");
  const graphicsFactory$ = dart.privateName(chart_canvas$, "ChartCanvas.graphicsFactory");
  chart_canvas$.ChartCanvas = class ChartCanvas extends core.Object {
    get canvas() {
      return this[canvas$];
    }
    set canvas(value) {
      super.canvas = value;
    }
    get graphicsFactory() {
      return this[graphicsFactory$];
    }
    set graphicsFactory(value) {
      super.graphicsFactory = value;
    }
    drawCircleSector(center, radius, innerRadius, startAngle, endAngle, opts) {
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      this[_circleSectorPainter] == null ? this[_circleSectorPainter] = new circle_sector_painter.CircleSectorPainter.new() : null;
      this[_circleSectorPainter].draw({canvas: this.canvas, paint: this[_paint], center: center, radius: radius, innerRadius: innerRadius, startAngle: startAngle, endAngle: endAngle, fill: fill, stroke: stroke, strokeWidthPx: strokeWidthPx});
    }
    drawLine(opts) {
      let points = opts && 'points' in opts ? opts.points : null;
      let clipBounds = opts && 'clipBounds' in opts ? opts.clipBounds : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let roundEndCaps = opts && 'roundEndCaps' in opts ? opts.roundEndCaps : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      let dashPattern = opts && 'dashPattern' in opts ? opts.dashPattern : null;
      this[_linePainter] == null ? this[_linePainter] = new line_painter.LinePainter.new() : null;
      this[_linePainter].draw({canvas: this.canvas, paint: this[_paint], points: points, clipBounds: clipBounds, fill: fill, stroke: stroke, roundEndCaps: roundEndCaps, strokeWidthPx: strokeWidthPx, dashPattern: dashPattern});
    }
    drawPie(canvasPie) {
      this[_piePainter] == null ? this[_piePainter] = new pie_painter.PiePainter.new() : null;
      this[_piePainter].draw(this.canvas, this[_paint], canvasPie);
    }
    drawPoint(opts) {
      let point = opts && 'point' in opts ? opts.point : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      this[_pointPainter] == null ? this[_pointPainter] = new point_painter.PointPainter.new() : null;
      this[_pointPainter].draw({canvas: this.canvas, paint: this[_paint], point: point, radius: radius, fill: fill, stroke: stroke, strokeWidthPx: strokeWidthPx});
    }
    drawPolygon(opts) {
      let points = opts && 'points' in opts ? opts.points : null;
      let clipBounds = opts && 'clipBounds' in opts ? opts.clipBounds : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      this[_polygonPainter] == null ? this[_polygonPainter] = new polygon_painter.PolygonPainter.new() : null;
      this[_polygonPainter].draw({canvas: this.canvas, paint: this[_paint], points: points, clipBounds: clipBounds, fill: fill, stroke: stroke, strokeWidthPx: strokeWidthPx});
    }
    [_createHintGradient](left, top, fill) {
      return ui.Gradient.linear(new ui.Offset.new(left, top), new ui.Offset.new(left, dart.notNull(top) - 5), JSArrayOfColor().of([new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b), new ui.Color.fromARGB(0, fill.r, fill.g, fill.b)]));
    }
    drawRect(bounds, opts) {
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let pattern = opts && 'pattern' in opts ? opts.pattern : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      let drawAreaBounds = opts && 'drawAreaBounds' in opts ? opts.drawAreaBounds : null;
      let drawStroke = strokeWidthPx != null && dart.notNull(strokeWidthPx) > 0.0 && stroke != null;
      let strokeWidthOffset = drawStroke ? strokeWidthPx : 0;
      let fillRectBounds = new (RectangleOfnum()).new(dart.notNull(bounds[$left]) + dart.notNull(strokeWidthOffset) / 2, dart.notNull(bounds[$top]) + dart.notNull(strokeWidthOffset) / 2, dart.notNull(bounds[$width]) - dart.notNull(strokeWidthOffset), dart.notNull(bounds[$height]) - dart.notNull(strokeWidthOffset));
      switch (pattern) {
        case C53 || CT.C53:
        {
          this[_drawForwardHatchPattern](fillRectBounds, this.canvas, {fill: fill, drawAreaBounds: drawAreaBounds});
          break;
        }
        case C54 || CT.C54:
        default:
        {
          this[_paint].color = new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b);
          this[_paint].style = ui.PaintingStyle.fill;
          if (drawAreaBounds != null && dart.notNull(bounds[$top]) < dart.notNull(drawAreaBounds[$top])) {
            this[_paint].shader = this[_createHintGradient](drawAreaBounds[$left][$toDouble](), drawAreaBounds[$top][$toDouble](), fill);
          }
          this.canvas.drawRect(this[_getRect](fillRectBounds), this[_paint]);
          break;
        }
      }
      if (drawStroke) {
        this[_paint].color = new ui.Color.fromARGB(stroke.a, stroke.r, stroke.g, stroke.b);
        this[_paint].shader = drawAreaBounds != null ? this[_createHintGradient](drawAreaBounds[$left][$toDouble](), drawAreaBounds[$top][$toDouble](), stroke) : null;
        this[_paint].strokeJoin = ui.StrokeJoin.round;
        this[_paint].strokeWidth = strokeWidthPx;
        this[_paint].style = ui.PaintingStyle.stroke;
        this.canvas.drawRect(this[_getRect](bounds), this[_paint]);
      }
      this[_paint].shader = null;
    }
    drawRRect(bounds, opts) {
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let patternColor = opts && 'patternColor' in opts ? opts.patternColor : null;
      let fillPattern = opts && 'fillPattern' in opts ? opts.fillPattern : null;
      let patternStrokeWidthPx = opts && 'patternStrokeWidthPx' in opts ? opts.patternStrokeWidthPx : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let roundTopLeft = opts && 'roundTopLeft' in opts ? opts.roundTopLeft : null;
      let roundTopRight = opts && 'roundTopRight' in opts ? opts.roundTopRight : null;
      let roundBottomLeft = opts && 'roundBottomLeft' in opts ? opts.roundBottomLeft : null;
      let roundBottomRight = opts && 'roundBottomRight' in opts ? opts.roundBottomRight : null;
      this[_paint].color = new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b);
      this[_paint].style = ui.PaintingStyle.fill;
      this.canvas.drawRRect(this[_getRRect](bounds, {radius: radius, roundTopLeft: roundTopLeft, roundTopRight: roundTopRight, roundBottomLeft: roundBottomLeft, roundBottomRight: roundBottomRight}), this[_paint]);
    }
    drawBarStack(barStack, opts) {
      let t0;
      let drawAreaBounds = opts && 'drawAreaBounds' in opts ? opts.drawAreaBounds : null;
      let roundedCorners = 0 < dart.notNull(barStack.radius);
      if (roundedCorners) {
        t0 = this.canvas;
        t0.save();
        t0.clipRRect(this[_getRRect](barStack.fullStackRect, {radius: barStack.radius[$toDouble](), roundTopLeft: barStack.roundTopLeft, roundTopRight: barStack.roundTopRight, roundBottomLeft: barStack.roundBottomLeft, roundBottomRight: barStack.roundBottomRight}));
        t0;
      }
      for (let barIndex = 0; barIndex < dart.notNull(barStack.segments[$length]); barIndex = barIndex + 1) {
        let segment = barStack.segments[$_get](barIndex);
        this.drawRect(segment.bounds, {fill: segment.fill, pattern: segment.pattern, stroke: segment.stroke, strokeWidthPx: segment.strokeWidthPx, drawAreaBounds: drawAreaBounds});
      }
      if (roundedCorners) {
        this.canvas.restore();
      }
    }
    drawText(textElement, offsetX, offsetY, opts) {
      let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
      if (!text_element$.TextElement.is(textElement)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/chart_canvas.dart", 280, 12, "textElement is TextElement");
      let flutterTextElement = text_element$.TextElement.as(textElement);
      let textDirection = flutterTextElement.textDirection;
      let measurement = flutterTextElement.measurement;
      if (rotation !== 0) {
        if (dart.equals(textDirection, text_element.TextDirection.rtl)) {
          offsetY = dart.notNull(offsetY) + measurement.horizontalSliceWidth[$toInt]();
        }
        offsetX = dart.notNull(offsetX) - dart.notNull(flutterTextElement.verticalFontShift);
        this.canvas.save();
        this.canvas.translate(offsetX[$toDouble](), offsetY[$toDouble]());
        this.canvas.rotate(rotation);
        text_element$.TextElement.as(textElement).textPainter.paint(this.canvas, new ui.Offset.new(0.0, 0.0));
        this.canvas.restore();
      } else {
        if (dart.equals(textDirection, text_element.TextDirection.rtl)) {
          offsetX = dart.notNull(offsetX) - measurement.horizontalSliceWidth[$toInt]();
        }
        if (dart.equals(textDirection, text_element.TextDirection.center)) {
          offsetX = dart.notNull(offsetX) - (dart.notNull(measurement.horizontalSliceWidth) / 2)[$ceil]();
        }
        offsetY = dart.notNull(offsetY) - dart.notNull(flutterTextElement.verticalFontShift);
        text_element$.TextElement.as(textElement).textPainter.paint(this.canvas, new ui.Offset.new(offsetX[$toDouble](), offsetY[$toDouble]()));
      }
    }
    setClipBounds(clipBounds) {
      let t0;
      t0 = this.canvas;
      t0.save();
      t0.clipRect(this[_getRect](clipBounds));
      t0;
    }
    resetClipBounds() {
      this.canvas.restore();
    }
    [_getRect](rectangle) {
      return new ui.Rect.fromLTWH(rectangle[$left][$toDouble](), rectangle[$top][$toDouble](), rectangle[$width][$toDouble](), rectangle[$height][$toDouble]());
    }
    [_getRRect](rectangle, opts) {
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let roundTopLeft = opts && 'roundTopLeft' in opts ? opts.roundTopLeft : false;
      let roundTopRight = opts && 'roundTopRight' in opts ? opts.roundTopRight : false;
      let roundBottomLeft = opts && 'roundBottomLeft' in opts ? opts.roundBottomLeft : false;
      let roundBottomRight = opts && 'roundBottomRight' in opts ? opts.roundBottomRight : false;
      let cornerRadius = radius === 0 ? ui.Radius.zero : new ui.Radius.circular(radius);
      return new ui.RRect.fromLTRBAndCorners(rectangle[$left][$toDouble](), rectangle[$top][$toDouble](), rectangle[$right][$toDouble](), rectangle[$bottom][$toDouble](), {topLeft: dart.test(roundTopLeft) ? cornerRadius : ui.Radius.zero, topRight: dart.test(roundTopRight) ? cornerRadius : ui.Radius.zero, bottomLeft: dart.test(roundBottomLeft) ? cornerRadius : ui.Radius.zero, bottomRight: dart.test(roundBottomRight) ? cornerRadius : ui.Radius.zero});
    }
    [_drawForwardHatchPattern](bounds, canvas, opts) {
      let background = opts && 'background' in opts ? opts.background : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let fillWidthPx = opts && 'fillWidthPx' in opts ? opts.fillWidthPx : 4;
      let drawAreaBounds = opts && 'drawAreaBounds' in opts ? opts.drawAreaBounds : null;
      background == null ? background = style_factory.StyleFactory.style.white : null;
      fill == null ? fill = style_factory.StyleFactory.style.black : null;
      this[_paint].color = new ui.Color.fromARGB(background.a, background.r, background.g, background.b);
      this[_paint].style = ui.PaintingStyle.fill;
      if (drawAreaBounds != null && dart.notNull(bounds[$top]) < dart.notNull(drawAreaBounds[$top])) {
        this[_paint].shader = this[_createHintGradient](drawAreaBounds[$left][$toDouble](), drawAreaBounds[$top][$toDouble](), background);
      }
      canvas.drawRect(this[_getRect](bounds), this[_paint]);
      let size = math.max(core.num, bounds[$width], bounds[$height]);
      let x0 = dart.notNull(bounds[$left]) + size + dart.notNull(fillWidthPx);
      let x1 = dart.notNull(bounds[$left]) - dart.notNull(fillWidthPx);
      let y0 = dart.notNull(bounds[$bottom]) - size - dart.notNull(fillWidthPx);
      let y1 = dart.notNull(bounds[$bottom]) + dart.notNull(fillWidthPx);
      let offset = 8;
      let isVertical = dart.notNull(bounds[$height]) >= dart.notNull(bounds[$width]);
      this[_linePainter] == null ? this[_linePainter] = new line_painter.LinePainter.new() : null;
      let smallSide = isVertical ? bounds[$width] : bounds[$height];
      let start = -(dart.notNull(smallSide) / offset)[$round]() * offset;
      let end = size + offset;
      let lineShader = null;
      if (drawAreaBounds != null && dart.notNull(bounds[$top]) < dart.notNull(drawAreaBounds[$top])) {
        lineShader = this[_createHintGradient](drawAreaBounds[$left][$toDouble](), drawAreaBounds[$top][$toDouble](), fill);
      }
      for (let i = start; i < end; i = i + offset) {
        let modifier = isVertical ? -1 * i : i;
        this[_linePainter].draw({canvas: canvas, paint: this[_paint], points: JSArrayOfPointOfnum().of([new (PointOfnum()).new(x0 + modifier, y0), new (PointOfnum()).new(x1 + modifier, y1)]), stroke: fill, strokeWidthPx: fillWidthPx, shader: lineShader});
      }
    }
    set drawingView(viewName) {
    }
  };
  (chart_canvas$.ChartCanvas.new = function(canvas, graphicsFactory) {
    this[_paint] = new ui.Paint.new();
    this[_circleSectorPainter] = null;
    this[_linePainter] = null;
    this[_piePainter] = null;
    this[_pointPainter] = null;
    this[_polygonPainter] = null;
    this[canvas$] = canvas;
    this[graphicsFactory$] = graphicsFactory;
    ;
  }).prototype = chart_canvas$.ChartCanvas.prototype;
  dart.addTypeTests(chart_canvas$.ChartCanvas);
  chart_canvas$.ChartCanvas[dart.implements] = () => [chart_canvas.ChartCanvas];
  dart.setMethodSignature(chart_canvas$.ChartCanvas, () => ({
    __proto__: dart.getMethods(chart_canvas$.ChartCanvas.__proto__),
    drawCircleSector: dart.fnType(dart.void, [math.Point$(core.num), core.double, core.double, core.double, core.double], {fill: color$.Color, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    drawLine: dart.fnType(dart.void, [], {clipBounds: math.Rectangle$(core.num), dashPattern: core.List$(core.int), fill: color$.Color, points: core.List$(math.Point$(core.num)), roundEndCaps: core.bool, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    drawPie: dart.fnType(dart.void, [canvas_shapes.CanvasPie]),
    drawPoint: dart.fnType(dart.void, [], {fill: color$.Color, point: math.Point$(core.num), radius: core.double, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    drawPolygon: dart.fnType(dart.void, [], {clipBounds: math.Rectangle$(core.num), fill: color$.Color, points: core.List$(math.Point$(core.num)), stroke: color$.Color, strokeWidthPx: core.double}, {}),
    [_createHintGradient]: dart.fnType(ui.Gradient, [core.double, core.double, color$.Color]),
    drawRect: dart.fnType(dart.void, [math.Rectangle$(core.num)], {drawAreaBounds: math.Rectangle$(core.num), fill: color$.Color, pattern: chart_canvas.FillPatternType, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    drawRRect: dart.fnType(dart.void, [math.Rectangle$(core.num)], {fill: color$.Color, fillPattern: chart_canvas.FillPatternType, patternColor: color$.Color, patternStrokeWidthPx: core.double, radius: core.num, roundBottomLeft: core.bool, roundBottomRight: core.bool, roundTopLeft: core.bool, roundTopRight: core.bool, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    drawBarStack: dart.fnType(dart.void, [canvas_shapes.CanvasBarStack], {drawAreaBounds: math.Rectangle$(core.num)}, {}),
    drawText: dart.fnType(dart.void, [text_element.TextElement, core.int, core.int], {rotation: core.double}, {}),
    setClipBounds: dart.fnType(dart.void, [math.Rectangle$(core.int)]),
    resetClipBounds: dart.fnType(dart.void, []),
    [_getRect]: dart.fnType(ui.Rect, [math.Rectangle$(core.num)]),
    [_getRRect]: dart.fnType(ui.RRect, [math.Rectangle$(core.num)], {radius: core.double, roundBottomLeft: core.bool, roundBottomRight: core.bool, roundTopLeft: core.bool, roundTopRight: core.bool}, {}),
    [_drawForwardHatchPattern]: dart.fnType(dart.dynamic, [math.Rectangle$(core.num), ui.Canvas], {background: color$.Color, drawAreaBounds: math.Rectangle$(core.num), fill: color$.Color, fillWidthPx: core.double}, {})
  }));
  dart.setSetterSignature(chart_canvas$.ChartCanvas, () => ({
    __proto__: dart.getSetters(chart_canvas$.ChartCanvas.__proto__),
    drawingView: core.String
  }));
  dart.setLibraryUri(chart_canvas$.ChartCanvas, "package:charts_flutter/src/chart_canvas.dart");
  dart.setFieldSignature(chart_canvas$.ChartCanvas, () => ({
    __proto__: dart.getFields(chart_canvas$.ChartCanvas.__proto__),
    canvas: dart.finalFieldType(ui.Canvas),
    graphicsFactory: dart.finalFieldType(graphics_factory.GraphicsFactory),
    [_paint]: dart.finalFieldType(ui.Paint),
    [_circleSectorPainter]: dart.fieldType(circle_sector_painter.CircleSectorPainter),
    [_linePainter]: dart.fieldType(line_painter.LinePainter),
    [_piePainter]: dart.fieldType(pie_painter.PiePainter),
    [_pointPainter]: dart.fieldType(point_painter.PointPainter),
    [_polygonPainter]: dart.fieldType(polygon_painter.PolygonPainter)
  }));
  dart.defineLazy(chart_canvas$.ChartCanvas, {
    /*chart_canvas$.ChartCanvas.rect_top_gradient_pixels*/get rect_top_gradient_pixels() {
      return 5;
    }
  });
  polygon_painter.PolygonPainter = class PolygonPainter extends core.Object {
    draw(opts) {
      let t0, t0$;
      let canvas = opts && 'canvas' in opts ? opts.canvas : null;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      let points = opts && 'points' in opts ? opts.points : null;
      let clipBounds = opts && 'clipBounds' in opts ? opts.clipBounds : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      if (dart.test(points[$isEmpty])) {
        return;
      }
      if (clipBounds != null) {
        t0 = canvas;
        t0.save();
        t0.clipRect(new ui.Rect.fromLTWH(clipBounds[$left][$toDouble](), clipBounds[$top][$toDouble](), clipBounds[$width][$toDouble](), clipBounds[$height][$toDouble]()));
        t0;
      }
      let strokeColor = stroke != null ? new ui.Color.fromARGB(stroke.a, stroke.r, stroke.g, stroke.b) : null;
      let fillColor = fill != null ? new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b) : null;
      if (points[$length] === 1) {
        let point = points[$first];
        paint.color = fillColor;
        paint.style = ui.PaintingStyle.fill;
        canvas.drawCircle(new ui.Offset.new(point.x, point.y), strokeWidthPx, paint);
      } else {
        if (strokeColor != null && strokeWidthPx != null) {
          paint.strokeWidth = strokeWidthPx;
          paint.strokeJoin = ui.StrokeJoin.bevel;
          paint.style = ui.PaintingStyle.stroke;
        }
        if (fillColor != null) {
          paint.color = fillColor;
          paint.style = ui.PaintingStyle.fill;
        }
        let path = (t0$ = ui.Path.new(), t0$.moveTo(points[$first].x[$toDouble](), points[$first].y[$toDouble]()), t0$);
        for (let point of points) {
          path.lineTo(point.x[$toDouble](), point.y[$toDouble]());
        }
        canvas.drawPath(path, paint);
      }
      if (clipBounds != null) {
        canvas.restore();
      }
    }
  };
  (polygon_painter.PolygonPainter.new = function() {
    ;
  }).prototype = polygon_painter.PolygonPainter.prototype;
  dart.addTypeTests(polygon_painter.PolygonPainter);
  dart.setMethodSignature(polygon_painter.PolygonPainter, () => ({
    __proto__: dart.getMethods(polygon_painter.PolygonPainter.__proto__),
    draw: dart.fnType(dart.void, [], {canvas: ui.Canvas, clipBounds: math.Rectangle$(core.num), fill: color$.Color, paint: ui.Paint, points: core.List$(math.Point$(core.num)), stroke: color$.Color, strokeWidthPx: core.double}, {})
  }));
  dart.setLibraryUri(polygon_painter.PolygonPainter, "package:charts_flutter/src/canvas/polygon_painter.dart");
  point_painter.PointPainter = class PointPainter extends core.Object {
    draw(opts) {
      let canvas = opts && 'canvas' in opts ? opts.canvas : null;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      let point = opts && 'point' in opts ? opts.point : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      if (point == null) {
        return;
      }
      if (fill != null) {
        paint.color = new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b);
        paint.style = ui.PaintingStyle.fill;
        canvas.drawCircle(new ui.Offset.new(point.x[$toDouble](), point.y[$toDouble]()), radius, paint);
      }
      if (stroke != null && strokeWidthPx != null && dart.notNull(strokeWidthPx) > 0.0) {
        paint.color = new ui.Color.fromARGB(stroke.a, stroke.r, stroke.g, stroke.b);
        paint.strokeWidth = strokeWidthPx;
        paint.strokeJoin = ui.StrokeJoin.bevel;
        paint.style = ui.PaintingStyle.stroke;
        canvas.drawCircle(new ui.Offset.new(point.x[$toDouble](), point.y[$toDouble]()), radius, paint);
      }
    }
  };
  (point_painter.PointPainter.new = function() {
    ;
  }).prototype = point_painter.PointPainter.prototype;
  dart.addTypeTests(point_painter.PointPainter);
  dart.setMethodSignature(point_painter.PointPainter, () => ({
    __proto__: dart.getMethods(point_painter.PointPainter.__proto__),
    draw: dart.fnType(dart.void, [], {canvas: ui.Canvas, fill: color$.Color, paint: ui.Paint, point: math.Point$(core.num), radius: core.double, stroke: color$.Color, strokeWidthPx: core.double}, {})
  }));
  dart.setLibraryUri(point_painter.PointPainter, "package:charts_flutter/src/canvas/point_painter.dart");
  const _circleSectorPainter$ = dart.privateName(pie_painter, "_circleSectorPainter");
  pie_painter.PiePainter = class PiePainter extends core.Object {
    draw(canvas, paint, canvasPie) {
      this[_circleSectorPainter$] == null ? this[_circleSectorPainter$] = new circle_sector_painter.CircleSectorPainter.new() : null;
      let center = canvasPie.center;
      let radius = canvasPie.radius;
      let innerRadius = canvasPie.innerRadius;
      for (let slice of canvasPie.slices) {
        this[_circleSectorPainter$].draw({canvas: canvas, paint: paint, center: center, radius: radius, innerRadius: innerRadius, startAngle: slice.startAngle, endAngle: slice.endAngle, fill: slice.fill});
      }
      if (canvasPie.stroke != null && canvasPie.strokeWidthPx != null && dart.notNull(canvasPie.slices[$length]) > 1) {
        paint.color = new ui.Color.fromARGB(canvasPie.stroke.a, canvasPie.stroke.r, canvasPie.stroke.g, canvasPie.stroke.b);
        paint.strokeWidth = canvasPie.strokeWidthPx;
        paint.strokeJoin = ui.StrokeJoin.bevel;
        paint.style = ui.PaintingStyle.stroke;
        let path = ui.Path.new();
        for (let slice of canvasPie.slices) {
          let innerRadiusStartPoint = new (PointOfdouble()).new(dart.notNull(innerRadius) * math.cos(slice.startAngle) + dart.notNull(center.x), dart.notNull(innerRadius) * math.sin(slice.startAngle) + dart.notNull(center.y));
          let innerRadiusEndPoint = new (PointOfdouble()).new(dart.notNull(innerRadius) * math.cos(slice.endAngle) + dart.notNull(center.x), dart.notNull(innerRadius) * math.sin(slice.endAngle) + dart.notNull(center.y));
          let radiusStartPoint = new (PointOfdouble()).new(dart.notNull(radius) * math.cos(slice.startAngle) + dart.notNull(center.x), dart.notNull(radius) * math.sin(slice.startAngle) + dart.notNull(center.y));
          let radiusEndPoint = new (PointOfdouble()).new(dart.notNull(radius) * math.cos(slice.endAngle) + dart.notNull(center.x), dart.notNull(radius) * math.sin(slice.endAngle) + dart.notNull(center.y));
          path.moveTo(innerRadiusStartPoint.x, innerRadiusStartPoint.y);
          path.lineTo(radiusStartPoint.x, radiusStartPoint.y);
          path.moveTo(innerRadiusEndPoint.x, innerRadiusEndPoint.y);
          path.lineTo(radiusEndPoint.x, radiusEndPoint.y);
        }
        canvas.drawPath(path, paint);
      }
    }
  };
  (pie_painter.PiePainter.new = function() {
    this[_circleSectorPainter$] = null;
    ;
  }).prototype = pie_painter.PiePainter.prototype;
  dart.addTypeTests(pie_painter.PiePainter);
  dart.setMethodSignature(pie_painter.PiePainter, () => ({
    __proto__: dart.getMethods(pie_painter.PiePainter.__proto__),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Paint, canvas_shapes.CanvasPie])
  }));
  dart.setLibraryUri(pie_painter.PiePainter, "package:charts_flutter/src/canvas/pie_painter.dart");
  dart.setFieldSignature(pie_painter.PiePainter, () => ({
    __proto__: dart.getFields(pie_painter.PiePainter.__proto__),
    [_circleSectorPainter$]: dart.fieldType(circle_sector_painter.CircleSectorPainter)
  }));
  circle_sector_painter.CircleSectorPainter = class CircleSectorPainter extends core.Object {
    draw(opts) {
      let t0;
      let canvas = opts && 'canvas' in opts ? opts.canvas : null;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let innerRadius = opts && 'innerRadius' in opts ? opts.innerRadius : null;
      let startAngle = opts && 'startAngle' in opts ? opts.startAngle : null;
      let endAngle = opts && 'endAngle' in opts ? opts.endAngle : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      paint.color = new ui.Color.fromARGB(fill.a, fill.r, fill.g, fill.b);
      paint.style = ui.PaintingStyle.fill;
      let innerRadiusStartPoint = new (PointOfdouble()).new(dart.notNull(innerRadius) * math.cos(startAngle) + dart.notNull(center.x), dart.notNull(innerRadius) * math.sin(startAngle) + dart.notNull(center.y));
      let innerRadiusEndPoint = new (PointOfdouble()).new(dart.notNull(innerRadius) * math.cos(endAngle) + dart.notNull(center.x), dart.notNull(innerRadius) * math.sin(endAngle) + dart.notNull(center.y));
      let radiusStartPoint = new (PointOfdouble()).new(dart.notNull(radius) * math.cos(startAngle) + dart.notNull(center.x), dart.notNull(radius) * math.sin(startAngle) + dart.notNull(center.y));
      let centerOffset = new ui.Offset.new(center.x, center.y);
      let isFullCircle = startAngle != null && endAngle != null && dart.notNull(endAngle) - dart.notNull(startAngle) === 2 * 3.141592653589793;
      let midpointAngle = (dart.notNull(endAngle) + dart.notNull(startAngle)) / 2;
      let path = (t0 = ui.Path.new(), t0.moveTo(innerRadiusStartPoint.x, innerRadiusStartPoint.y), t0);
      path.lineTo(radiusStartPoint.x, radiusStartPoint.y);
      if (isFullCircle) {
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: radius}), startAngle, midpointAngle - dart.notNull(startAngle), true);
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: radius}), midpointAngle, dart.notNull(endAngle) - midpointAngle, true);
      } else {
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: radius}), startAngle, dart.notNull(endAngle) - dart.notNull(startAngle), true);
      }
      path.lineTo(innerRadiusEndPoint.x, innerRadiusEndPoint.y);
      if (isFullCircle) {
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: innerRadius}), endAngle, midpointAngle - dart.notNull(endAngle), true);
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: innerRadius}), midpointAngle, dart.notNull(startAngle) - midpointAngle, true);
      } else {
        path.arcTo(new ui.Rect.fromCircle({center: centerOffset, radius: innerRadius}), endAngle, dart.notNull(startAngle) - dart.notNull(endAngle), true);
      }
      path.lineTo(radiusStartPoint.x, radiusStartPoint.y);
      canvas.drawPath(path, paint);
    }
  };
  (circle_sector_painter.CircleSectorPainter.new = function() {
    ;
  }).prototype = circle_sector_painter.CircleSectorPainter.prototype;
  dart.addTypeTests(circle_sector_painter.CircleSectorPainter);
  dart.setMethodSignature(circle_sector_painter.CircleSectorPainter, () => ({
    __proto__: dart.getMethods(circle_sector_painter.CircleSectorPainter.__proto__),
    draw: dart.fnType(dart.void, [], {canvas: ui.Canvas, center: math.Point$(core.num), endAngle: core.double, fill: color$.Color, innerRadius: core.double, paint: ui.Paint, radius: core.double, startAngle: core.double, stroke: color$.Color, strokeWidthPx: core.double}, {})
  }));
  dart.setLibraryUri(circle_sector_painter.CircleSectorPainter, "package:charts_flutter/src/canvas/circle_sector_painter.dart");
  const _drawSolidLine = dart.privateName(line_painter, "_drawSolidLine");
  const _drawDashedLine = dart.privateName(line_painter, "_drawDashedLine");
  const _getOffset = dart.privateName(line_painter, "_getOffset");
  const _getOffsetDistance = dart.privateName(line_painter, "_getOffsetDistance");
  line_painter.LinePainter = class LinePainter extends core.Object {
    draw(opts) {
      let t0;
      let canvas = opts && 'canvas' in opts ? opts.canvas : null;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      let points = opts && 'points' in opts ? opts.points : null;
      let clipBounds = opts && 'clipBounds' in opts ? opts.clipBounds : null;
      let fill = opts && 'fill' in opts ? opts.fill : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let roundEndCaps = opts && 'roundEndCaps' in opts ? opts.roundEndCaps : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
      let dashPattern = opts && 'dashPattern' in opts ? opts.dashPattern : null;
      let shader = opts && 'shader' in opts ? opts.shader : null;
      if (dart.test(points[$isEmpty])) {
        return;
      }
      if (clipBounds != null) {
        t0 = canvas;
        t0.save();
        t0.clipRect(new ui.Rect.fromLTWH(clipBounds[$left][$toDouble](), clipBounds[$top][$toDouble](), clipBounds[$width][$toDouble](), clipBounds[$height][$toDouble]()));
        t0;
      }
      paint.color = new ui.Color.fromARGB(stroke.a, stroke.r, stroke.g, stroke.b);
      if (shader != null) {
        paint.shader = shader;
      }
      if (points[$length] === 1) {
        let point = points[$first];
        paint.style = ui.PaintingStyle.fill;
        canvas.drawCircle(new ui.Offset.new(point.x, point.y), strokeWidthPx, paint);
      } else {
        if (strokeWidthPx != null) {
          paint.strokeWidth = strokeWidthPx;
        }
        paint.strokeJoin = ui.StrokeJoin.round;
        paint.style = ui.PaintingStyle.stroke;
        if (dashPattern == null || dart.test(dashPattern[$isEmpty])) {
          if (dart.equals(roundEndCaps, true)) {
            paint.strokeCap = ui.StrokeCap.round;
          }
          this[_drawSolidLine](canvas, paint, points);
        } else {
          this[_drawDashedLine](canvas, paint, points, dashPattern);
        }
      }
      if (clipBounds != null) {
        canvas.restore();
      }
    }
    [_drawSolidLine](canvas, paint, points) {
      let t0;
      let path = (t0 = ui.Path.new(), t0.moveTo(points[$first].x[$toDouble](), points[$first].y[$toDouble]()), t0);
      for (let point of points) {
        path.lineTo(point.x[$toDouble](), point.y[$toDouble]());
      }
      canvas.drawPath(path, paint);
    }
    [_drawDashedLine](canvas, paint, points, dashPattern) {
      let t0;
      let localDashPattern = core.List.from(dashPattern);
      if (dashPattern[$length][$modulo](2) === 1) {
        localDashPattern[$addAll](dashPattern);
      }
      let previousSeriesPoint = this[_getOffset](points[$first]);
      let remainder = 0;
      let solid = true;
      let dashPatternIndex = 0;
      let getNextDashPatternSegment = dart.fn(() => {
        let dashSegment = localDashPattern[$_get](dashPatternIndex);
        dashPatternIndex = (dashPatternIndex + 1)[$modulo](localDashPattern[$length]);
        return dashSegment;
      }, VoidTodynamic());
      let remainderPoints = null;
      for (let pointIndex = 1; pointIndex < dart.notNull(points[$length]); pointIndex = pointIndex + 1) {
        let seriesPoint = this[_getOffset](points[$_get](pointIndex));
        if (dart.equals(previousSeriesPoint, seriesPoint)) {
        } else {
          let previousPoint = previousSeriesPoint;
          let d = this[_getOffsetDistance](previousSeriesPoint, seriesPoint);
          while (dart.notNull(d) > 0) {
            let dashSegment = remainder > 0 ? remainder : getNextDashPatternSegment();
            remainder = 0;
            let v = seriesPoint['-'](previousPoint);
            let u = new ui.Offset.new(dart.notNull(v.dx) / dart.notNull(v.distance), dart.notNull(v.dy) / dart.notNull(v.distance));
            let distance = dart.notNull(d) < dart.notNull(core.num._check(dashSegment)) ? d : dart.dsend(dashSegment, 'toDouble', []);
            let nextPoint = previousPoint['+'](u['*'](core.double._check(distance)));
            if (solid) {
              if (remainderPoints != null) {
                dart.dsend(remainderPoints, 'add', [new ui.Offset.new(nextPoint.dx, nextPoint.dy)]);
                let path = (t0 = ui.Path.new(), t0.moveTo(core.double._check(dart.dload(dart.dload(remainderPoints, 'first'), 'dx')), core.double._check(dart.dload(dart.dload(remainderPoints, 'first'), 'dy'))), t0);
                for (let p of core.Iterable._check(remainderPoints)) {
                  path.lineTo(core.double._check(dart.dload(p, 'dx')), core.double._check(dart.dload(p, 'dy')));
                }
                canvas.drawPath(path, paint);
                remainderPoints = null;
              } else {
                if (dart.notNull(d) < dart.notNull(core.num._check(dashSegment)) && pointIndex < dart.notNull(points[$length]) - 1) {
                  remainderPoints = JSArrayOfOffset().of([new ui.Offset.new(previousPoint.dx, previousPoint.dy), new ui.Offset.new(nextPoint.dx, nextPoint.dy)]);
                } else {
                  canvas.drawLine(previousPoint, nextPoint, paint);
                }
              }
            }
            solid = !solid;
            previousPoint = nextPoint;
            d = dart.notNull(d) - dart.notNull(core.num._check(dashSegment));
          }
          remainder = -d[$round]();
          if (remainder > 0) {
            solid = !solid;
          }
        }
        previousSeriesPoint = seriesPoint;
      }
    }
    [_getOffset](point) {
      return new ui.Offset.new(point.x[$toDouble](), point.y[$toDouble]());
    }
    [_getOffsetDistance](o1, o2) {
      let p1 = new (PointOfdouble()).new(o1.dx, o1.dy);
      let p2 = new (PointOfdouble()).new(o2.dx, o2.dy);
      return p1.distanceTo(p2);
    }
  };
  (line_painter.LinePainter.new = function() {
    ;
  }).prototype = line_painter.LinePainter.prototype;
  dart.addTypeTests(line_painter.LinePainter);
  dart.setMethodSignature(line_painter.LinePainter, () => ({
    __proto__: dart.getMethods(line_painter.LinePainter.__proto__),
    draw: dart.fnType(dart.void, [], {canvas: ui.Canvas, clipBounds: math.Rectangle$(core.num), dashPattern: core.List$(core.int), fill: color$.Color, paint: ui.Paint, points: core.List$(math.Point$(core.num)), roundEndCaps: core.bool, shader: ui.Shader, stroke: color$.Color, strokeWidthPx: core.double}, {}),
    [_drawSolidLine]: dart.fnType(dart.void, [ui.Canvas, ui.Paint, core.List$(math.Point$(core.num))]),
    [_drawDashedLine]: dart.fnType(dart.void, [ui.Canvas, ui.Paint, core.List$(math.Point$(core.num)), core.List$(core.int)]),
    [_getOffset]: dart.fnType(ui.Offset, [math.Point$(core.num)]),
    [_getOffsetDistance]: dart.fnType(core.num, [ui.Offset, ui.Offset])
  }));
  dart.setLibraryUri(line_painter.LinePainter, "package:charts_flutter/src/canvas/line_painter.dart");
  const _name$4 = dart.privateName(selection_trigger, "_name");
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  const desiredGestures$ = dart.privateName(select_nearest$, "SelectNearest.desiredGestures");
  const selectionModelType$0 = dart.privateName(select_nearest$, "SelectNearest.selectionModelType");
  const eventTrigger$ = dart.privateName(select_nearest$, "SelectNearest.eventTrigger");
  const expandToDomain$ = dart.privateName(select_nearest$, "SelectNearest.expandToDomain");
  const selectAcrossAllDrawAreaComponents$ = dart.privateName(select_nearest$, "SelectNearest.selectAcrossAllDrawAreaComponents");
  const selectClosestSeries$ = dart.privateName(select_nearest$, "SelectNearest.selectClosestSeries");
  const maximumDomainDistancePx$ = dart.privateName(select_nearest$, "SelectNearest.maximumDomainDistancePx");
  select_nearest$.SelectNearest = class SelectNearest extends chart_behavior$.ChartBehavior$(select_nearest.SelectNearest) {
    get desiredGestures() {
      return this[desiredGestures$];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$0];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    get eventTrigger() {
      return this[eventTrigger$];
    }
    set eventTrigger(value) {
      super.eventTrigger = value;
    }
    get expandToDomain() {
      return this[expandToDomain$];
    }
    set expandToDomain(value) {
      super.expandToDomain = value;
    }
    get selectAcrossAllDrawAreaComponents() {
      return this[selectAcrossAllDrawAreaComponents$];
    }
    set selectAcrossAllDrawAreaComponents(value) {
      super.selectAcrossAllDrawAreaComponents = value;
    }
    get selectClosestSeries() {
      return this[selectClosestSeries$];
    }
    set selectClosestSeries(value) {
      super.selectClosestSeries = value;
    }
    get maximumDomainDistancePx() {
      return this[maximumDomainDistancePx$];
    }
    set maximumDomainDistancePx(value) {
      super.maximumDomainDistancePx = value;
    }
    static new(opts) {
      let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : C1 || CT.C1;
      let expandToDomain = opts && 'expandToDomain' in opts ? opts.expandToDomain : true;
      let selectAcrossAllDrawAreaComponents = opts && 'selectAcrossAllDrawAreaComponents' in opts ? opts.selectAcrossAllDrawAreaComponents : false;
      let selectClosestSeries = opts && 'selectClosestSeries' in opts ? opts.selectClosestSeries : true;
      let eventTrigger = opts && 'eventTrigger' in opts ? opts.eventTrigger : C55 || CT.C55;
      let maximumDomainDistancePx = opts && 'maximumDomainDistancePx' in opts ? opts.maximumDomainDistancePx : null;
      return new select_nearest$.SelectNearest._internal({selectionModelType: selectionModelType, expandToDomain: expandToDomain, selectAcrossAllDrawAreaComponents: selectAcrossAllDrawAreaComponents, selectClosestSeries: selectClosestSeries, eventTrigger: eventTrigger, desiredGestures: select_nearest$.SelectNearest._getDesiredGestures(eventTrigger), maximumDomainDistancePx: maximumDomainDistancePx});
    }
    static _getDesiredGestures(eventTrigger) {
      let t0, t0$, t0$0, t0$1;
      let desiredGestures = new (_HashSetOfGestureType()).new();
      switch (eventTrigger) {
        case C55 || CT.C55:
        {
          t0 = desiredGestures;
          t0.add(chart_behavior$.GestureType.onTap);
          t0;
          break;
        }
        case C56 || CT.C56:
        {
          t0$ = desiredGestures;
          t0$.add(chart_behavior$.GestureType.onTap);
          t0$.add(chart_behavior$.GestureType.onDrag);
          t0$;
          break;
        }
        case C57 || CT.C57:
        case C58 || CT.C58:
        {
          t0$0 = desiredGestures;
          t0$0.add(chart_behavior$.GestureType.onTap);
          t0$0.add(chart_behavior$.GestureType.onLongPress);
          t0$0.add(chart_behavior$.GestureType.onDrag);
          t0$0;
          break;
        }
        case C59 || CT.C59:
        default:
        {
          t0$1 = desiredGestures;
          t0$1.add(chart_behavior$.GestureType.onHover);
          t0$1;
          break;
        }
      }
      return desiredGestures;
    }
    createCommonBehavior(D) {
      return new (select_nearest.SelectNearest$(D)).new({selectionModelType: this.selectionModelType, eventTrigger: this.eventTrigger, expandToDomain: this.expandToDomain, selectClosestSeries: this.selectClosestSeries, maximumDomainDistancePx: this.maximumDomainDistancePx});
    }
    updateCommonBehavior(commonBehavior) {
      chart_behavior.ChartBehavior._check(commonBehavior);
    }
    get role() {
      return "SelectNearest-" + dart.str(dart.toString(this.selectionModelType)) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      if (select_nearest$.SelectNearest.is(other)) {
        return dart.equals(this.selectionModelType, other.selectionModelType) && dart.equals(this.eventTrigger, other.eventTrigger) && dart.equals(this.expandToDomain, other.expandToDomain) && dart.equals(this.selectClosestSeries, other.selectClosestSeries) && this.maximumDomainDistancePx == other.maximumDomainDistancePx;
      } else {
        return false;
      }
    }
    get hashCode() {
      let hashcode = dart.hashCode(this.selectionModelType);
      hashcode = dart.notNull(hashcode) * 37 + dart.notNull(dart.hashCode(this.eventTrigger));
      hashcode = dart.notNull(hashcode) * 37 + dart.hashCode(this.expandToDomain);
      hashcode = dart.notNull(hashcode) * 37 + dart.hashCode(this.selectClosestSeries);
      hashcode = dart.notNull(hashcode) * 37 + dart.hashCode(this.maximumDomainDistancePx);
      return hashcode;
    }
  };
  (select_nearest$.SelectNearest._internal = function(opts) {
    let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : null;
    let expandToDomain = opts && 'expandToDomain' in opts ? opts.expandToDomain : true;
    let selectAcrossAllDrawAreaComponents = opts && 'selectAcrossAllDrawAreaComponents' in opts ? opts.selectAcrossAllDrawAreaComponents : false;
    let selectClosestSeries = opts && 'selectClosestSeries' in opts ? opts.selectClosestSeries : true;
    let eventTrigger = opts && 'eventTrigger' in opts ? opts.eventTrigger : null;
    let desiredGestures = opts && 'desiredGestures' in opts ? opts.desiredGestures : null;
    let maximumDomainDistancePx = opts && 'maximumDomainDistancePx' in opts ? opts.maximumDomainDistancePx : null;
    this[selectionModelType$0] = selectionModelType;
    this[expandToDomain$] = expandToDomain;
    this[selectAcrossAllDrawAreaComponents$] = selectAcrossAllDrawAreaComponents;
    this[selectClosestSeries$] = selectClosestSeries;
    this[eventTrigger$] = eventTrigger;
    this[desiredGestures$] = desiredGestures;
    this[maximumDomainDistancePx$] = maximumDomainDistancePx;
    ;
  }).prototype = select_nearest$.SelectNearest.prototype;
  dart.addTypeTests(select_nearest$.SelectNearest);
  dart.setMethodSignature(select_nearest$.SelectNearest, () => ({
    __proto__: dart.getMethods(select_nearest$.SelectNearest.__proto__),
    createCommonBehavior: dart.gFnType(D => [select_nearest.SelectNearest$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(select_nearest$.SelectNearest, () => ({
    __proto__: dart.getGetters(select_nearest$.SelectNearest.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(select_nearest$.SelectNearest, "package:charts_flutter/src/behaviors/select_nearest.dart");
  dart.setFieldSignature(select_nearest$.SelectNearest, () => ({
    __proto__: dart.getFields(select_nearest$.SelectNearest.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType),
    eventTrigger: dart.finalFieldType(selection_trigger.SelectionTrigger),
    expandToDomain: dart.finalFieldType(core.bool),
    selectAcrossAllDrawAreaComponents: dart.finalFieldType(core.bool),
    selectClosestSeries: dart.finalFieldType(core.bool),
    maximumDomainDistancePx: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(select_nearest$.SelectNearest, ['_equals']);
  dart.defineExtensionAccessors(select_nearest$.SelectNearest, ['hashCode']);
  const desiredGestures$0 = dart.privateName(sliding_viewport$, "SlidingViewport.desiredGestures");
  const selectionModelType$1 = dart.privateName(sliding_viewport$, "SlidingViewport.selectionModelType");
  sliding_viewport$.SlidingViewport = class SlidingViewport extends chart_behavior$.ChartBehavior$(sliding_viewport.SlidingViewport) {
    get desiredGestures() {
      return this[desiredGestures$0];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$1];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    createCommonBehavior(D) {
      return new (sliding_viewport.SlidingViewport$(D)).new(this.selectionModelType);
    }
    updateCommonBehavior(commonBehavior) {
      sliding_viewport.SlidingViewport._check(commonBehavior);
    }
    get role() {
      return "slidingViewport-" + dart.str(dart.toString(this.selectionModelType));
    }
    _equals(o) {
      if (o == null) return false;
      return sliding_viewport$.SlidingViewport.is(o) && dart.equals(this.selectionModelType, o.selectionModelType);
    }
    get hashCode() {
      return dart.hashCode(this.selectionModelType);
    }
  };
  (sliding_viewport$.SlidingViewport.new = function(selectionModelType) {
    if (selectionModelType === void 0) selectionModelType = C1 || CT.C1;
    this[desiredGestures$0] = new (_HashSetOfGestureType()).new();
    this[selectionModelType$1] = selectionModelType;
    ;
  }).prototype = sliding_viewport$.SlidingViewport.prototype;
  dart.addTypeTests(sliding_viewport$.SlidingViewport);
  dart.setMethodSignature(sliding_viewport$.SlidingViewport, () => ({
    __proto__: dart.getMethods(sliding_viewport$.SlidingViewport.__proto__),
    createCommonBehavior: dart.gFnType(D => [sliding_viewport.SlidingViewport$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(sliding_viewport$.SlidingViewport, () => ({
    __proto__: dart.getGetters(sliding_viewport$.SlidingViewport.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(sliding_viewport$.SlidingViewport, "package:charts_flutter/src/behaviors/sliding_viewport.dart");
  dart.setFieldSignature(sliding_viewport$.SlidingViewport, () => ({
    __proto__: dart.getFields(sliding_viewport$.SlidingViewport.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType)
  }));
  dart.defineExtensionMethods(sliding_viewport$.SlidingViewport, ['_equals']);
  dart.defineExtensionAccessors(sliding_viewport$.SlidingViewport, ['hashCode']);
  legend_content_builder.LegendContentBuilder = class LegendContentBuilder extends core.Object {};
  (legend_content_builder.LegendContentBuilder.new = function() {
    ;
  }).prototype = legend_content_builder.LegendContentBuilder.prototype;
  dart.addTypeTests(legend_content_builder.LegendContentBuilder);
  dart.setLibraryUri(legend_content_builder.LegendContentBuilder, "package:charts_flutter/src/behaviors/legend/legend_content_builder.dart");
  legend_content_builder.BaseLegendContentBuilder = class BaseLegendContentBuilder extends core.Object {
    build(context, legendState, legend, opts) {
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let entryWidgets = legendState.legendEntries[$map](framework.Widget, dart.fn(entry => {
        let isHidden = false;
        if (series_legend.SeriesLegend.is(legend)) {
          isHidden = legend.isSeriesHidden(entry.series.id);
        }
        return this.legendEntryLayout.build(context, entry, legend$.TappableLegend.as(legend), isHidden, {showMeasures: showMeasures});
      }, LegendEntryToWidget()))[$toList]();
      return this.legendLayout.build(context, entryWidgets);
    }
  };
  (legend_content_builder.BaseLegendContentBuilder.new = function() {
    ;
  }).prototype = legend_content_builder.BaseLegendContentBuilder.prototype;
  dart.addTypeTests(legend_content_builder.BaseLegendContentBuilder);
  legend_content_builder.BaseLegendContentBuilder[dart.implements] = () => [legend_content_builder.LegendContentBuilder];
  dart.setMethodSignature(legend_content_builder.BaseLegendContentBuilder, () => ({
    __proto__: dart.getMethods(legend_content_builder.BaseLegendContentBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, legend.LegendState, legend.Legend], {showMeasures: core.bool}, {})
  }));
  dart.setLibraryUri(legend_content_builder.BaseLegendContentBuilder, "package:charts_flutter/src/behaviors/legend/legend_content_builder.dart");
  let C60;
  const legendEntryLayout$ = dart.privateName(legend_content_builder, "TabularLegendContentBuilder.legendEntryLayout");
  const legendLayout$ = dart.privateName(legend_content_builder, "TabularLegendContentBuilder.legendLayout");
  legend_content_builder.TabularLegendContentBuilder = class TabularLegendContentBuilder extends legend_content_builder.BaseLegendContentBuilder {
    get legendEntryLayout() {
      return this[legendEntryLayout$];
    }
    set legendEntryLayout(value) {
      super.legendEntryLayout = value;
    }
    get legendLayout() {
      return this[legendLayout$];
    }
    set legendLayout(value) {
      super.legendLayout = value;
    }
    _equals(o) {
      if (o == null) return false;
      return legend_content_builder.TabularLegendContentBuilder.is(o) && dart.equals(this.legendEntryLayout, o.legendEntryLayout) && dart.equals(this.legendLayout, o.legendLayout);
    }
    get hashCode() {
      return ui.hashValues(this.legendEntryLayout, this.legendLayout);
    }
  };
  (legend_content_builder.TabularLegendContentBuilder.new = function(opts) {
    let t0, t0$;
    let legendEntryLayout = opts && 'legendEntryLayout' in opts ? opts.legendEntryLayout : null;
    let legendLayout = opts && 'legendLayout' in opts ? opts.legendLayout : null;
    this[legendEntryLayout$] = (t0 = legendEntryLayout, t0 == null ? C60 || CT.C60 : t0);
    this[legendLayout$] = (t0$ = legendLayout, t0$ == null ? legend_layout.TabularLegendLayout.horizontalFirst() : t0$);
    ;
  }).prototype = legend_content_builder.TabularLegendContentBuilder.prototype;
  dart.addTypeTests(legend_content_builder.TabularLegendContentBuilder);
  dart.setMethodSignature(legend_content_builder.TabularLegendContentBuilder, () => ({
    __proto__: dart.getMethods(legend_content_builder.TabularLegendContentBuilder.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(legend_content_builder.TabularLegendContentBuilder, "package:charts_flutter/src/behaviors/legend/legend_content_builder.dart");
  dart.setFieldSignature(legend_content_builder.TabularLegendContentBuilder, () => ({
    __proto__: dart.getFields(legend_content_builder.TabularLegendContentBuilder.__proto__),
    legendEntryLayout: dart.finalFieldType(legend_entry_layout.LegendEntryLayout),
    legendLayout: dart.finalFieldType(legend_layout.LegendLayout)
  }));
  dart.defineExtensionMethods(legend_content_builder.TabularLegendContentBuilder, ['_equals']);
  dart.defineExtensionAccessors(legend_content_builder.TabularLegendContentBuilder, ['hashCode']);
  legend_layout.LegendLayout = class LegendLayout extends core.Object {};
  (legend_layout.LegendLayout.new = function() {
    ;
  }).prototype = legend_layout.LegendLayout.prototype;
  dart.addTypeTests(legend_layout.LegendLayout);
  dart.setLibraryUri(legend_layout.LegendLayout, "package:charts_flutter/src/behaviors/legend/legend_layout.dart");
  let C63;
  let C64;
  let C62;
  let C61;
  const _buildHorizontalFirst = dart.privateName(legend_layout, "_buildHorizontalFirst");
  const _buildVerticalFirst = dart.privateName(legend_layout, "_buildVerticalFirst");
  const _buildTableFromRows = dart.privateName(legend_layout, "_buildTableFromRows");
  let C67;
  let C66;
  let C65;
  let C70;
  let C71;
  let C69;
  let C68;
  const isHorizontalFirst$ = dart.privateName(legend_layout, "TabularLegendLayout.isHorizontalFirst");
  const desiredMaxRows$ = dart.privateName(legend_layout, "TabularLegendLayout.desiredMaxRows");
  const desiredMaxColumns$ = dart.privateName(legend_layout, "TabularLegendLayout.desiredMaxColumns");
  const cellPadding$ = dart.privateName(legend_layout, "TabularLegendLayout.cellPadding");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C72;
  legend_layout.TabularLegendLayout = class TabularLegendLayout extends core.Object {
    get isHorizontalFirst() {
      return this[isHorizontalFirst$];
    }
    set isHorizontalFirst(value) {
      super.isHorizontalFirst = value;
    }
    get desiredMaxRows() {
      return this[desiredMaxRows$];
    }
    set desiredMaxRows(value) {
      super.desiredMaxRows = value;
    }
    get desiredMaxColumns() {
      return this[desiredMaxColumns$];
    }
    set desiredMaxColumns(value) {
      super.desiredMaxColumns = value;
    }
    get cellPadding() {
      return this[cellPadding$];
    }
    set cellPadding(value) {
      super.cellPadding = value;
    }
    static horizontalFirst(opts) {
      let t0;
      let desiredMaxColumns = opts && 'desiredMaxColumns' in opts ? opts.desiredMaxColumns : null;
      let cellPadding = opts && 'cellPadding' in opts ? opts.cellPadding : null;
      return new legend_layout.TabularLegendLayout._internal({isHorizontalFirst: true, desiredMaxRows: -1, desiredMaxColumns: (t0 = desiredMaxColumns, t0 == null ? -1 : t0), cellPadding: cellPadding});
    }
    static verticalFirst(opts) {
      let t0;
      let desiredMaxRows = opts && 'desiredMaxRows' in opts ? opts.desiredMaxRows : null;
      let cellPadding = opts && 'cellPadding' in opts ? opts.cellPadding : null;
      return new legend_layout.TabularLegendLayout._internal({isHorizontalFirst: false, desiredMaxRows: (t0 = desiredMaxRows, t0 == null ? -1 : t0), desiredMaxColumns: -1, cellPadding: cellPadding});
    }
    build(context, legendEntries) {
      let paddedLegendEntries = this.cellPadding == null ? legendEntries : legendEntries[$map](basic.Padding, dart.fn(entry => new basic.Padding.new({padding: this.cellPadding, child: entry, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), WidgetToPadding()))[$toList]();
      return dart.test(this.isHorizontalFirst) ? this[_buildHorizontalFirst](paddedLegendEntries) : this[_buildVerticalFirst](paddedLegendEntries);
    }
    _equals(o) {
      if (o == null) return false;
      return legend_layout.TabularLegendLayout.is(o) && this.desiredMaxRows == o.desiredMaxRows && this.desiredMaxColumns == o.desiredMaxColumns && dart.equals(this.isHorizontalFirst, o.isHorizontalFirst) && dart.equals(this.cellPadding, o.cellPadding);
    }
    get hashCode() {
      return ui.hashValues(this.desiredMaxRows, this.desiredMaxColumns, this.isHorizontalFirst, this.cellPadding);
    }
    [_buildHorizontalFirst](legendEntries) {
      let maxColumns = this.desiredMaxColumns === -1 ? legendEntries[$length] : math.min(core.int, legendEntries[$length], this.desiredMaxColumns);
      let rows = JSArrayOfTableRow().of([]);
      for (let i = 0; i < dart.notNull(legendEntries[$length]); i = i + dart.notNull(maxColumns)) {
        rows[$add](new table.TableRow.new({children: legendEntries[$sublist](i, math.min(core.int, i + dart.notNull(maxColumns), legendEntries[$length]))[$toList]()}));
      }
      return this[_buildTableFromRows](rows);
    }
    [_buildVerticalFirst](legendEntries) {
      let maxRows = this.desiredMaxRows === -1 ? legendEntries[$length] : math.min(core.int, legendEntries[$length], this.desiredMaxRows);
      let rows = ListOfTableRow().generate(maxRows, dart.fn(_ => new table.TableRow.new({children: JSArrayOfWidget().of([])}), intToTableRow()));
      for (let i = 0; i < dart.notNull(legendEntries[$length]); i = i + 1) {
        rows[$_get](i[$modulo](maxRows)).children[$add](legendEntries[$_get](i));
      }
      return this[_buildTableFromRows](rows);
    }
    [_buildTableFromRows](rows) {
      let t0;
      let padWidget = new basic.Padding.new({padding: (t0 = this.cellPadding, t0 == null ? legend_layout.TabularLegendLayout.defaultCellPadding : t0), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
      let columnCount = rows[$map](core.int, dart.fn(r => r.children[$length], TableRowToint()))[$fold](dart.dynamic, 0, dart.fn((max, current) => dart.notNull(current) > dart.notNull(core.num._check(max)) ? current : max, dynamicAndintTodynamic()));
      for (let i = 0; i < dart.notNull(rows[$length]); i = i + 1) {
        let rowChildren = rows[$_get](i).children;
        let padCount = dart.dsend(columnCount, '-', [rowChildren[$length]]);
        if (dart.dtest(dart.dsend(padCount, '>', [0]))) {
          rowChildren[$addAll](IterableOfPadding().generate(core.int._check(padCount), dart.fn(_ => padWidget, intToPadding())));
        }
      }
      return new table.Table.new({children: rows, defaultColumnWidth: new table$.IntrinsicColumnWidth.new(), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
    }
  };
  (legend_layout.TabularLegendLayout._internal = function(opts) {
    let isHorizontalFirst = opts && 'isHorizontalFirst' in opts ? opts.isHorizontalFirst : null;
    let desiredMaxRows = opts && 'desiredMaxRows' in opts ? opts.desiredMaxRows : null;
    let desiredMaxColumns = opts && 'desiredMaxColumns' in opts ? opts.desiredMaxColumns : null;
    let cellPadding = opts && 'cellPadding' in opts ? opts.cellPadding : null;
    this[isHorizontalFirst$] = isHorizontalFirst;
    this[desiredMaxRows$] = desiredMaxRows;
    this[desiredMaxColumns$] = desiredMaxColumns;
    this[cellPadding$] = cellPadding;
    ;
  }).prototype = legend_layout.TabularLegendLayout.prototype;
  dart.addTypeTests(legend_layout.TabularLegendLayout);
  legend_layout.TabularLegendLayout[dart.implements] = () => [legend_layout.LegendLayout];
  dart.setMethodSignature(legend_layout.TabularLegendLayout, () => ({
    __proto__: dart.getMethods(legend_layout.TabularLegendLayout.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.List$(framework.Widget)]),
    [_buildHorizontalFirst]: dart.fnType(framework.Widget, [core.List$(framework.Widget)]),
    [_buildVerticalFirst]: dart.fnType(framework.Widget, [core.List$(framework.Widget)]),
    [_buildTableFromRows]: dart.fnType(table.Table, [core.List$(table.TableRow)])
  }));
  dart.setLibraryUri(legend_layout.TabularLegendLayout, "package:charts_flutter/src/behaviors/legend/legend_layout.dart");
  dart.setFieldSignature(legend_layout.TabularLegendLayout, () => ({
    __proto__: dart.getFields(legend_layout.TabularLegendLayout.__proto__),
    isHorizontalFirst: dart.finalFieldType(core.bool),
    desiredMaxRows: dart.finalFieldType(core.int),
    desiredMaxColumns: dart.finalFieldType(core.int),
    cellPadding: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  dart.defineExtensionMethods(legend_layout.TabularLegendLayout, ['_equals']);
  dart.defineExtensionAccessors(legend_layout.TabularLegendLayout, ['hashCode']);
  dart.defineLazy(legend_layout.TabularLegendLayout, {
    /*legend_layout.TabularLegendLayout._noLimit*/get _noLimit() {
      return -1;
    },
    /*legend_layout.TabularLegendLayout.defaultCellPadding*/get defaultCellPadding() {
      return C72 || CT.C72;
    }
  });
  legend_entry_layout.LegendEntryLayout = class LegendEntryLayout extends core.Object {};
  (legend_entry_layout.LegendEntryLayout.new = function() {
    ;
  }).prototype = legend_entry_layout.LegendEntryLayout.prototype;
  dart.addTypeTests(legend_entry_layout.LegendEntryLayout);
  dart.setLibraryUri(legend_entry_layout.LegendEntryLayout, "package:charts_flutter/src/behaviors/legend/legend_entry_layout.dart");
  let C75;
  let C76;
  let C74;
  let C73;
  const _convertTextStyle = dart.privateName(legend_entry_layout, "_convertTextStyle");
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C93;
  let C92;
  let C97;
  let C96;
  let C95;
  let C100;
  let C99;
  let C98;
  legend_entry_layout.SimpleLegendEntryLayout = class SimpleLegendEntryLayout extends core.Object {
    createSymbol(context, legendEntry, legend, isHidden) {
      let materialSymbolSize = new ui.Size.new(12.0, 12.0);
      let entryColor = legendEntry.color;
      let color = color$0.ColorUtil.toDartColor(entryColor);
      let symbolRendererBuilder = symbol_renderer$.SymbolRendererBuilder._check(symbol_renderer$.SymbolRendererBuilder.is(legendEntry.symbolRenderer) ? legendEntry.symbolRenderer : new symbol_renderer$.SymbolRendererCanvas.new(legendEntry.symbolRenderer));
      return new gesture_detector.GestureDetector.new({child: symbolRendererBuilder.build(context, {size: materialSymbolSize, color: color, enabled: !dart.test(isHidden)}), onTapUp: this.makeTapUpCallback(context, legendEntry, legend), $creationLocationd_0dea112b090073317d4: C73 || CT.C73});
    }
    createLabel(context, legendEntry, legend, isHidden) {
      let style = this[_convertTextStyle](isHidden, context, legendEntry.textStyle);
      return new gesture_detector.GestureDetector.new({child: new text.Text.new(legendEntry.label, {style: style, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), onTapUp: this.makeTapUpCallback(context, legendEntry, legend), $creationLocationd_0dea112b090073317d4: C81 || CT.C81});
    }
    createMeasureValue(context, legendEntry, legend, isHidden) {
      return new gesture_detector.GestureDetector.new({child: new text.Text.new(legendEntry.formattedValue, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), onTapUp: this.makeTapUpCallback(context, legendEntry, legend), $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
    }
    build(context, legendEntry, legend, isHidden, opts) {
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let rowChildren = JSArrayOfWidget().of([]);
      let padding = new edge_insets.EdgeInsets.only({right: 8.0});
      let symbol = this.createSymbol(context, legendEntry, legend, isHidden);
      let label = this.createLabel(context, legendEntry, legend, isHidden);
      let measure = dart.test(showMeasures) ? this.createMeasureValue(context, legendEntry, legend, isHidden) : null;
      rowChildren[$add](symbol);
      rowChildren[$add](new container.Container.new({padding: padding, $creationLocationd_0dea112b090073317d4: C92 || CT.C92}));
      rowChildren[$add](label);
      if (measure != null) {
        rowChildren[$add](new container.Container.new({padding: padding, $creationLocationd_0dea112b090073317d4: C95 || CT.C95}));
        rowChildren[$add](measure);
      }
      return new basic.Row.new({children: rowChildren, $creationLocationd_0dea112b090073317d4: C98 || CT.C98});
    }
    makeTapUpCallback(context, legendEntry, legend) {
      return dart.fn(d => {
        legend.onLegendEntryTapUp(legendEntry);
      }, TapUpDetailsToNull());
    }
    _equals(other) {
      if (other == null) return false;
      return legend_entry_layout.SimpleLegendEntryLayout.is(other);
    }
    get hashCode() {
      return dart.hashCode(this[$runtimeType]);
    }
    [_convertTextStyle](isHidden, context, textStyle) {
      let t0, t0$, t0$0;
      let color = (t0 = textStyle, t0 == null ? null : t0.color) != null ? color$0.ColorUtil.toDartColor(textStyle.color) : null;
      if (dart.test(isHidden)) {
        color == null ? color = theme.Theme.of(context).textTheme.body1.color : null;
        color = color.withOpacity(0.26);
      }
      return new text_style$.TextStyle.new({inherit: true, fontFamily: (t0$ = textStyle, t0$ == null ? null : t0$.fontFamily), fontSize: (t0$0 = textStyle, t0$0 == null ? null : t0$0.fontSize) != null ? textStyle.fontSize[$toDouble]() : null, color: color});
    }
  };
  (legend_entry_layout.SimpleLegendEntryLayout.new = function() {
    ;
  }).prototype = legend_entry_layout.SimpleLegendEntryLayout.prototype;
  dart.addTypeTests(legend_entry_layout.SimpleLegendEntryLayout);
  legend_entry_layout.SimpleLegendEntryLayout[dart.implements] = () => [legend_entry_layout.LegendEntryLayout];
  dart.setMethodSignature(legend_entry_layout.SimpleLegendEntryLayout, () => ({
    __proto__: dart.getMethods(legend_entry_layout.SimpleLegendEntryLayout.__proto__),
    createSymbol: dart.fnType(framework.Widget, [framework.BuildContext, legend_entry.LegendEntry, legend$.TappableLegend, core.bool]),
    createLabel: dart.fnType(framework.Widget, [framework.BuildContext, legend_entry.LegendEntry, legend$.TappableLegend, core.bool]),
    createMeasureValue: dart.fnType(framework.Widget, [framework.BuildContext, legend_entry.LegendEntry, legend$.TappableLegend, core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext, legend_entry.LegendEntry, legend$.TappableLegend, core.bool], {showMeasures: core.bool}, {}),
    makeTapUpCallback: dart.fnType(dart.fnType(dart.void, [tap.TapUpDetails]), [framework.BuildContext, legend_entry.LegendEntry, legend$.TappableLegend]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    [_convertTextStyle]: dart.fnType(text_style$.TextStyle, [core.bool, framework.BuildContext, axis_spec.TextStyleSpec])
  }));
  dart.setLibraryUri(legend_entry_layout.SimpleLegendEntryLayout, "package:charts_flutter/src/behaviors/legend/legend_entry_layout.dart");
  dart.defineExtensionMethods(legend_entry_layout.SimpleLegendEntryLayout, ['_equals']);
  dart.defineExtensionAccessors(legend_entry_layout.SimpleLegendEntryLayout, ['hashCode']);
  const _is_TappableLegend_default = Symbol('_is_TappableLegend_default');
  legend$.TappableLegend$ = dart.generic((T, D) => {
    class TappableLegend extends core.Object {}
    (TappableLegend.new = function() {
      ;
    }).prototype = TappableLegend.prototype;
    dart.addTypeTests(TappableLegend);
    TappableLegend.prototype[_is_TappableLegend_default] = true;
    dart.setLibraryUri(TappableLegend, "package:charts_flutter/src/behaviors/legend/legend.dart");
    return TappableLegend;
  });
  legend$.TappableLegend = legend$.TappableLegend$();
  dart.addTypeTests(legend$.TappableLegend, _is_TappableLegend_default);
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C105;
  let C104;
  const commonSymbolRenderer$ = dart.privateName(symbol_renderer$, "SymbolRendererCanvas.commonSymbolRenderer");
  symbol_renderer$.SymbolRendererCanvas = class SymbolRendererCanvas extends core.Object {
    get commonSymbolRenderer() {
      return this[commonSymbolRenderer$];
    }
    set commonSymbolRenderer(value) {
      super.commonSymbolRenderer = value;
    }
    build(context, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : true;
      if (!dart.test(enabled)) {
        color = color.withOpacity(0.26);
      }
      return new basic.SizedBox.fromSize({size: size, child: new basic.CustomPaint.new({painter: new symbol_renderer$._SymbolCustomPaint.new(context, this.commonSymbolRenderer, color), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104});
    }
  };
  (symbol_renderer$.SymbolRendererCanvas.new = function(commonSymbolRenderer) {
    this[commonSymbolRenderer$] = commonSymbolRenderer;
    ;
  }).prototype = symbol_renderer$.SymbolRendererCanvas.prototype;
  dart.addTypeTests(symbol_renderer$.SymbolRendererCanvas);
  symbol_renderer$.SymbolRendererCanvas[dart.implements] = () => [symbol_renderer$.SymbolRendererBuilder];
  dart.setMethodSignature(symbol_renderer$.SymbolRendererCanvas, () => ({
    __proto__: dart.getMethods(symbol_renderer$.SymbolRendererCanvas.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext], {color: ui.Color, enabled: core.bool, size: ui.Size}, {})
  }));
  dart.setLibraryUri(symbol_renderer$.SymbolRendererCanvas, "package:charts_flutter/src/symbol_renderer.dart");
  dart.setFieldSignature(symbol_renderer$.SymbolRendererCanvas, () => ({
    __proto__: dart.getFields(symbol_renderer$.SymbolRendererCanvas.__proto__),
    commonSymbolRenderer: dart.finalFieldType(symbol_renderer.SymbolRenderer)
  }));
  symbol_renderer$.CustomSymbolRenderer = class CustomSymbolRenderer extends symbol_renderer.SymbolRenderer {
    paint(canvas, bounds, opts) {
      let dashPattern = opts && 'dashPattern' in opts ? opts.dashPattern : null;
      let fillColor = opts && 'fillColor' in opts ? opts.fillColor : null;
      let strokeColor = opts && 'strokeColor' in opts ? opts.strokeColor : null;
      let strokeWidthPx = opts && 'strokeWidthPx' in opts ? opts.strokeWidthPx : null;
    }
    shouldRepaint(oldRenderer) {
      symbol_renderer.SymbolRenderer._check(oldRenderer);
      return false;
    }
  };
  (symbol_renderer$.CustomSymbolRenderer.new = function() {
    symbol_renderer$.CustomSymbolRenderer.__proto__.new.call(this);
    ;
  }).prototype = symbol_renderer$.CustomSymbolRenderer.prototype;
  dart.addTypeTests(symbol_renderer$.CustomSymbolRenderer);
  symbol_renderer$.CustomSymbolRenderer[dart.implements] = () => [symbol_renderer$.SymbolRendererBuilder];
  dart.setMethodSignature(symbol_renderer$.CustomSymbolRenderer, () => ({
    __proto__: dart.getMethods(symbol_renderer$.CustomSymbolRenderer.__proto__),
    paint: dart.fnType(dart.void, [chart_canvas.ChartCanvas, math.Rectangle$(core.num)], {dashPattern: core.List$(core.int), fillColor: color$.Color, strokeColor: color$.Color, strokeWidthPx: core.double}, {}),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(symbol_renderer$.CustomSymbolRenderer, "package:charts_flutter/src/symbol_renderer.dart");
  symbol_renderer$.SymbolRendererBuilder = class SymbolRendererBuilder extends core.Object {};
  (symbol_renderer$.SymbolRendererBuilder.new = function() {
    ;
  }).prototype = symbol_renderer$.SymbolRendererBuilder.prototype;
  dart.addTypeTests(symbol_renderer$.SymbolRendererBuilder);
  dart.setLibraryUri(symbol_renderer$.SymbolRendererBuilder, "package:charts_flutter/src/symbol_renderer.dart");
  symbol_renderer$._SymbolCustomPaint = class _SymbolCustomPaint extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let bounds = new (RectangleOfnum()).new(0, 0, size.width[$toInt](), size.height[$toInt]());
      let commonColor = new color$.Color.new({r: this.color.red, g: this.color.green, b: this.color.blue, a: this.color.alpha});
      this.symbolRenderer.paint(new chart_canvas$.ChartCanvas.new(canvas, new graphics_factory$.GraphicsFactory.new(this.context)), bounds, {fillColor: commonColor, strokeColor: commonColor});
    }
    shouldRepaint(oldDelegate) {
      symbol_renderer$._SymbolCustomPaint._check(oldDelegate);
      return this.symbolRenderer.shouldRepaint(oldDelegate.symbolRenderer);
    }
  };
  (symbol_renderer$._SymbolCustomPaint.new = function(context, symbolRenderer, color) {
    this.context = context;
    this.symbolRenderer = symbolRenderer;
    this.color = color;
    symbol_renderer$._SymbolCustomPaint.__proto__.new.call(this);
    ;
  }).prototype = symbol_renderer$._SymbolCustomPaint.prototype;
  dart.addTypeTests(symbol_renderer$._SymbolCustomPaint);
  dart.setMethodSignature(symbol_renderer$._SymbolCustomPaint, () => ({
    __proto__: dart.getMethods(symbol_renderer$._SymbolCustomPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(symbol_renderer$._SymbolCustomPaint, "package:charts_flutter/src/symbol_renderer.dart");
  dart.setFieldSignature(symbol_renderer$._SymbolCustomPaint, () => ({
    __proto__: dart.getFields(symbol_renderer$._SymbolCustomPaint.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    symbolRenderer: dart.finalFieldType(symbol_renderer.SymbolRenderer),
    color: dart.finalFieldType(ui.Color)
  }));
  color$0.ColorUtil = class ColorUtil extends core.Object {
    static toDartColor(color) {
      return new ui.Color.fromARGB(color.a, color.r, color.g, color.b);
    }
    static fromDartColor(color) {
      return new color$.Color.new({r: color.red, g: color.green, b: color.blue, a: color.alpha});
    }
  };
  (color$0.ColorUtil.new = function() {
    ;
  }).prototype = color$0.ColorUtil.prototype;
  dart.addTypeTests(color$0.ColorUtil);
  dart.setLibraryUri(color$0.ColorUtil, "package:charts_flutter/src/util/color.dart");
  combo_chart.NumericComboChart = class NumericComboChart extends cartesian_chart$.CartesianChart$(core.num) {
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new cartesian_chart.NumericCartesianChart.new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis()))});
    }
  };
  (combo_chart.NumericComboChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    combo_chart.NumericComboChart.__proto__.new.call(this, ListOfSeriesOfdynamic$num()._check(seriesList), {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = combo_chart.NumericComboChart.prototype;
  dart.addTypeTests(combo_chart.NumericComboChart);
  dart.setMethodSignature(combo_chart.NumericComboChart, () => ({
    __proto__: dart.getMethods(combo_chart.NumericComboChart.__proto__),
    createCommonChart: dart.fnType(cartesian_chart.NumericCartesianChart, [core.Object])
  }));
  dart.setLibraryUri(combo_chart.NumericComboChart, "package:charts_flutter/src/combo_chart/combo_chart.dart");
  combo_chart.OrdinalComboChart = class OrdinalComboChart extends cartesian_chart$.CartesianChart$(core.String) {
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new cartesian_chart.OrdinalCartesianChart.new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis()))});
    }
  };
  (combo_chart.OrdinalComboChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    combo_chart.OrdinalComboChart.__proto__.new.call(this, ListOfSeriesOfdynamic$String()._check(seriesList), {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = combo_chart.OrdinalComboChart.prototype;
  dart.addTypeTests(combo_chart.OrdinalComboChart);
  dart.setMethodSignature(combo_chart.OrdinalComboChart, () => ({
    __proto__: dart.getMethods(combo_chart.OrdinalComboChart.__proto__),
    createCommonChart: dart.fnType(cartesian_chart.OrdinalCartesianChart, [core.Object])
  }));
  dart.setLibraryUri(combo_chart.OrdinalComboChart, "package:charts_flutter/src/combo_chart/combo_chart.dart");
  scatter_plot_chart$.ScatterPlotChart = class ScatterPlotChart extends cartesian_chart$.CartesianChart$(core.num) {
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new scatter_plot_chart.ScatterPlotChart.new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis())), disjointMeasureAxes: this.createDisjointMeasureAxes()});
    }
  };
  (scatter_plot_chart$.ScatterPlotChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let disjointMeasureAxes = opts && 'disjointMeasureAxes' in opts ? opts.disjointMeasureAxes : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let flipVerticalAxis = opts && 'flipVerticalAxis' in opts ? opts.flipVerticalAxis : null;
    let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    scatter_plot_chart$.ScatterPlotChart.__proto__.new.call(this, ListOfSeriesOfdynamic$num()._check(seriesList), {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, disjointMeasureAxes: disjointMeasureAxes, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, flipVerticalAxis: flipVerticalAxis, userManagedState: userManagedState, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scatter_plot_chart$.ScatterPlotChart.prototype;
  dart.addTypeTests(scatter_plot_chart$.ScatterPlotChart);
  dart.setMethodSignature(scatter_plot_chart$.ScatterPlotChart, () => ({
    __proto__: dart.getMethods(scatter_plot_chart$.ScatterPlotChart.__proto__),
    createCommonChart: dart.fnType(scatter_plot_chart.ScatterPlotChart, [core.Object])
  }));
  dart.setLibraryUri(scatter_plot_chart$.ScatterPlotChart, "package:charts_flutter/src/scatter_plot_chart.dart");
  const _is_PieChart_default = Symbol('_is_PieChart_default');
  pie_chart$.PieChart$ = dart.generic(D => {
    let SeriesOfdynamic$D = () => (SeriesOfdynamic$D = dart.constFn(series.Series$(dart.dynamic, D)))();
    let ListOfSeriesOfdynamic$D = () => (ListOfSeriesOfdynamic$D = dart.constFn(core.List$(SeriesOfdynamic$D())))();
    let PieChartOfD = () => (PieChartOfD = dart.constFn(pie_chart.PieChart$(D)))();
    class PieChart extends base_chart$.BaseChart$(D) {
      createCommonChart(chartState) {
        let t0;
        base_chart_state.BaseChartState._check(chartState);
        return new (PieChartOfD()).new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig)});
      }
      addDefaultInteractions(behaviors) {
        super.addDefaultInteractions(behaviors);
      }
    }
    (PieChart.new = function(seriesList, opts) {
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
      let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
      let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
      let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
      let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
      let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      PieChart.__proto__.new.call(this, ListOfSeriesOfdynamic$D()._check(seriesList), {animate: animate, animationDuration: animationDuration, defaultRenderer: defaultRenderer, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = PieChart.prototype;
    dart.addTypeTests(PieChart);
    PieChart.prototype[_is_PieChart_default] = true;
    dart.setMethodSignature(PieChart, () => ({
      __proto__: dart.getMethods(PieChart.__proto__),
      createCommonChart: dart.fnType(pie_chart.PieChart$(D), [core.Object])
    }));
    dart.setLibraryUri(PieChart, "package:charts_flutter/src/pie_chart.dart");
    return PieChart;
  });
  pie_chart$.PieChart = pie_chart$.PieChart$();
  dart.addTypeTests(pie_chart$.PieChart, _is_PieChart_default);
  line_chart$.LineChart = class LineChart extends cartesian_chart$.CartesianChart$(core.num) {
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new line_chart.LineChart.new({layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis())), disjointMeasureAxes: this.createDisjointMeasureAxes()});
    }
    addDefaultInteractions(behaviors) {
      super.addDefaultInteractions(behaviors);
      behaviors[$add](new line_point_highlighter$.LinePointHighlighter.new());
    }
  };
  (line_chart$.LineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let disjointMeasureAxes = opts && 'disjointMeasureAxes' in opts ? opts.disjointMeasureAxes : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let flipVerticalAxis = opts && 'flipVerticalAxis' in opts ? opts.flipVerticalAxis : null;
    let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    line_chart$.LineChart.__proto__.new.call(this, ListOfSeriesOfdynamic$num()._check(seriesList), {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, disjointMeasureAxes: disjointMeasureAxes, defaultRenderer: defaultRenderer, customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, layoutConfig: layoutConfig, defaultInteractions: defaultInteractions, flipVerticalAxis: flipVerticalAxis, userManagedState: userManagedState, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = line_chart$.LineChart.prototype;
  dart.addTypeTests(line_chart$.LineChart);
  dart.setMethodSignature(line_chart$.LineChart, () => ({
    __proto__: dart.getMethods(line_chart$.LineChart.__proto__),
    createCommonChart: dart.fnType(line_chart.LineChart, [core.Object])
  }));
  dart.setLibraryUri(line_chart$.LineChart, "package:charts_flutter/src/line_chart.dart");
  const _desiredGestures = dart.privateName(pan_behavior$, "_desiredGestures");
  const panningCompletedCallback$ = dart.privateName(pan_behavior$, "PanBehavior.panningCompletedCallback");
  pan_behavior$.PanBehavior = class PanBehavior extends chart_behavior$.ChartBehavior$(pan_behavior.PanBehavior) {
    get panningCompletedCallback() {
      return this[panningCompletedCallback$];
    }
    set panningCompletedCallback(value) {
      super.panningCompletedCallback = value;
    }
    get desiredGestures() {
      return this[_desiredGestures];
    }
    createCommonBehavior(D) {
      let t0;
      t0 = new (pan_behavior$.FlutterPanBehavior$(D)).new();
      t0.panningCompletedCallback = this.panningCompletedCallback;
      return t0;
    }
    updateCommonBehavior(commonBehavior) {
      chart_behavior.ChartBehavior._check(commonBehavior);
    }
    get role() {
      return "Pan";
    }
    _equals(other) {
      if (other == null) return false;
      return pan_behavior$.PanBehavior.is(other) && dart.equals(other.panningCompletedCallback, this.panningCompletedCallback);
    }
    get hashCode() {
      return dart.hashCode(this.panningCompletedCallback);
    }
  };
  (pan_behavior$.PanBehavior.new = function(opts) {
    let panningCompletedCallback = opts && 'panningCompletedCallback' in opts ? opts.panningCompletedCallback : null;
    this[_desiredGestures] = LinkedHashSetOfGestureType().from([chart_behavior$.GestureType.onDrag]);
    this[panningCompletedCallback$] = panningCompletedCallback;
    ;
  }).prototype = pan_behavior$.PanBehavior.prototype;
  dart.addTypeTests(pan_behavior$.PanBehavior);
  dart.setMethodSignature(pan_behavior$.PanBehavior, () => ({
    __proto__: dart.getMethods(pan_behavior$.PanBehavior.__proto__),
    createCommonBehavior: dart.gFnType(D => [pan_behavior.PanBehavior$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(pan_behavior$.PanBehavior, () => ({
    __proto__: dart.getGetters(pan_behavior$.PanBehavior.__proto__),
    desiredGestures: core.Set$(chart_behavior$.GestureType),
    role: core.String
  }));
  dart.setLibraryUri(pan_behavior$.PanBehavior, "package:charts_flutter/src/behaviors/zoom/pan_behavior.dart");
  dart.setFieldSignature(pan_behavior$.PanBehavior, () => ({
    __proto__: dart.getFields(pan_behavior$.PanBehavior.__proto__),
    [_desiredGestures]: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    panningCompletedCallback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.defineExtensionMethods(pan_behavior$.PanBehavior, ['_equals']);
  dart.defineExtensionAccessors(pan_behavior$.PanBehavior, ['hashCode']);
  const _chartState$ = dart.privateName(pan_behavior$, "_chartState");
  const _flingAnimator = dart.privateName(pan_behavior$, "_flingAnimator");
  const _flingAnimationInitialTranslatePx = dart.privateName(pan_behavior$, "_flingAnimationInitialTranslatePx");
  const _flingAnimationTargetTranslatePx = dart.privateName(pan_behavior$, "_flingAnimationTargetTranslatePx");
  const _isFlinging = dart.privateName(pan_behavior$, "_isFlinging");
  const _onFlingTick = dart.privateName(pan_behavior$, "_onFlingTick");
  const _startFling = dart.privateName(pan_behavior$, "_startFling");
  const _decelerate = dart.privateName(pan_behavior$, "_decelerate");
  const _is_FlutterPanBehaviorMixin_default = Symbol('_is_FlutterPanBehaviorMixin_default');
  pan_behavior$.FlutterPanBehaviorMixin$ = dart.generic(D => {
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart.BaseChart$(D)))();
    class FlutterPanBehaviorMixin extends pan_behavior.PanBehavior$(D) {}
    FlutterPanBehaviorMixin[dart.mixinOn] = PanBehavior => class FlutterPanBehaviorMixin extends PanBehavior {
      set chartState(chartState) {
        let t0;
        if (!(chartState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/behaviors/zoom/pan_behavior.dart", 78, 12, "chartState != null");
        this[_chartState$] = chartState;
        this[_flingAnimator] = this[_chartState$].getAnimationController(this);
        t0 = this[_flingAnimator];
        t0 == null ? null : t0.addListener(dart.bind(this, _onFlingTick));
      }
      removeFrom(chart) {
        BaseChartOfD()._check(chart);
        this.stopFlingAnimation();
        this[_chartState$].disposeAnimationController(this);
        this[_flingAnimator] = null;
        super.removeFrom(chart);
      }
      onTapTest(chartPoint) {
        super.onTapTest(chartPoint);
        this.stopFlingAnimation();
        return true;
      }
      onDragEnd(localPosition, scale, pixelsPerSec) {
        if (dart.test(this.isPanning)) {
          if (pixelsPerSec[$abs]() < 300) {
            this.onPanEnd();
            return true;
          }
          this[_startFling](pixelsPerSec);
        }
        return super.onDragEnd(localPosition, scale, pixelsPerSec);
      }
      [_startFling](pixelsPerSec) {
        let t0;
        let domainAxis = this.chart.domainAxis;
        this[_flingAnimationInitialTranslatePx] = domainAxis.viewportTranslatePx;
        this[_flingAnimationTargetTranslatePx] = dart.notNull(this[_flingAnimationInitialTranslatePx]) + dart.notNull(pixelsPerSec) * 0.15;
        let flingDuration = new core.Duration.new({milliseconds: math.max(core.int, 200, (dart.notNull(pixelsPerSec) * 0.15)[$abs]()[$round]())});
        t0 = this[_flingAnimator];
        t0.duration = flingDuration;
        t0.forward({from: 0.0});
        t0;
        this[_isFlinging] = true;
      }
      [_decelerate](value) {
        return 1 === 1.0 ? 1.0 - (1.0 - dart.notNull(value)) * (1.0 - dart.notNull(value)) : 1.0 - math.pow(1.0 - dart.notNull(value), 2 * 1);
      }
      [_onFlingTick]() {
        if (!dart.test(this[_isFlinging])) {
          return;
        }
        let percent = this[_flingAnimator].value;
        let deceleratedPercent = this[_decelerate](percent);
        let translation = ui.lerpDouble(this[_flingAnimationInitialTranslatePx], this[_flingAnimationTargetTranslatePx], deceleratedPercent);
        let domainAxis = this.chart.domainAxis;
        domainAxis.setViewportSettings(domainAxis.viewportScalingFactor, translation, {drawAreaWidth: this.chart.drawAreaBounds[$width]});
        if (dart.notNull(percent) >= 1.0) {
          this.stopFlingAnimation();
          this.onPanEnd();
          this.chart.redraw();
        } else {
          this.chart.redraw({skipAnimation: true, skipLayout: true});
        }
      }
      stopFlingAnimation() {
        let t0;
        if (dart.test(this[_isFlinging])) {
          this[_isFlinging] = false;
          t0 = this[_flingAnimator];
          t0 == null ? null : t0.stop();
        }
      }
    };
    (FlutterPanBehaviorMixin[dart.mixinNew] = function() {
      this[_chartState$] = null;
      this[_flingAnimator] = null;
      this[_flingAnimationInitialTranslatePx] = null;
      this[_flingAnimationTargetTranslatePx] = null;
      this[_isFlinging] = false;
    }).prototype = FlutterPanBehaviorMixin.prototype;
    dart.addTypeTests(FlutterPanBehaviorMixin);
    FlutterPanBehaviorMixin.prototype[_is_FlutterPanBehaviorMixin_default] = true;
    FlutterPanBehaviorMixin[dart.implements] = () => [chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior), pan_behavior.PanBehavior$(D)];
    dart.setMethodSignature(FlutterPanBehaviorMixin, () => ({
      __proto__: dart.getMethods(FlutterPanBehaviorMixin.__proto__),
      [_startFling]: dart.fnType(dart.void, [core.double]),
      [_decelerate]: dart.fnType(core.double, [core.double]),
      [_onFlingTick]: dart.fnType(dart.void, []),
      stopFlingAnimation: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(FlutterPanBehaviorMixin, () => ({
      __proto__: dart.getSetters(FlutterPanBehaviorMixin.__proto__),
      chartState: base_chart_state.BaseChartState
    }));
    dart.setLibraryUri(FlutterPanBehaviorMixin, "package:charts_flutter/src/behaviors/zoom/pan_behavior.dart");
    dart.setFieldSignature(FlutterPanBehaviorMixin, () => ({
      __proto__: dart.getFields(FlutterPanBehaviorMixin.__proto__),
      [_chartState$]: dart.fieldType(base_chart_state.BaseChartState),
      [_flingAnimator]: dart.fieldType(animation_controller.AnimationController),
      [_flingAnimationInitialTranslatePx]: dart.fieldType(core.double),
      [_flingAnimationTargetTranslatePx]: dart.fieldType(core.double),
      [_isFlinging]: dart.fieldType(core.bool)
    }));
    return FlutterPanBehaviorMixin;
  });
  pan_behavior$.FlutterPanBehaviorMixin = pan_behavior$.FlutterPanBehaviorMixin$();
  dart.defineLazy(pan_behavior$.FlutterPanBehaviorMixin, {
    /*pan_behavior$.FlutterPanBehaviorMixin.flingDistanceMultiplier*/get flingDistanceMultiplier() {
      return 0.15;
    },
    /*pan_behavior$.FlutterPanBehaviorMixin.flingDeceleratorFactor*/get flingDeceleratorFactor() {
      return 1;
    },
    /*pan_behavior$.FlutterPanBehaviorMixin.flingDurationMultiplier*/get flingDurationMultiplier() {
      return 0.15;
    },
    /*pan_behavior$.FlutterPanBehaviorMixin.minimumFlingVelocity*/get minimumFlingVelocity() {
      return 300;
    }
  });
  dart.addTypeTests(pan_behavior$.FlutterPanBehaviorMixin, _is_FlutterPanBehaviorMixin_default);
  const _is_FlutterPanBehavior_default = Symbol('_is_FlutterPanBehavior_default');
  pan_behavior$.FlutterPanBehavior$ = dart.generic(D => {
    const PanBehavior_FlutterPanBehaviorMixin$36 = class PanBehavior_FlutterPanBehaviorMixin extends pan_behavior.PanBehavior$(D) {};
    (PanBehavior_FlutterPanBehaviorMixin$36.new = function() {
      pan_behavior$.FlutterPanBehaviorMixin$(D)[dart.mixinNew].call(this);
      PanBehavior_FlutterPanBehaviorMixin$36.__proto__.new.call(this);
    }).prototype = PanBehavior_FlutterPanBehaviorMixin$36.prototype;
    dart.applyMixin(PanBehavior_FlutterPanBehaviorMixin$36, pan_behavior$.FlutterPanBehaviorMixin$(D));
    class FlutterPanBehavior extends PanBehavior_FlutterPanBehaviorMixin$36 {}
    (FlutterPanBehavior.new = function() {
      FlutterPanBehavior.__proto__.new.call(this);
      ;
    }).prototype = FlutterPanBehavior.prototype;
    dart.addTypeTests(FlutterPanBehavior);
    FlutterPanBehavior.prototype[_is_FlutterPanBehavior_default] = true;
    dart.setLibraryUri(FlutterPanBehavior, "package:charts_flutter/src/behaviors/zoom/pan_behavior.dart");
    return FlutterPanBehavior;
  });
  pan_behavior$.FlutterPanBehavior = pan_behavior$.FlutterPanBehavior$();
  dart.addTypeTests(pan_behavior$.FlutterPanBehavior, _is_FlutterPanBehavior_default);
  const _desiredGestures$ = dart.privateName(pan_and_zoom_behavior$, "_desiredGestures");
  const panningCompletedCallback$0 = dart.privateName(pan_and_zoom_behavior$, "PanAndZoomBehavior.panningCompletedCallback");
  pan_and_zoom_behavior$.PanAndZoomBehavior = class PanAndZoomBehavior extends chart_behavior$.ChartBehavior$(pan_and_zoom_behavior.PanAndZoomBehavior) {
    get panningCompletedCallback() {
      return this[panningCompletedCallback$0];
    }
    set panningCompletedCallback(value) {
      super.panningCompletedCallback = value;
    }
    get desiredGestures() {
      return this[_desiredGestures$];
    }
    createCommonBehavior(D) {
      let t0;
      t0 = new (pan_and_zoom_behavior$.FlutterPanAndZoomBehavior$(D)).new();
      t0.panningCompletedCallback = this.panningCompletedCallback;
      return t0;
    }
    updateCommonBehavior(commonBehavior) {
      chart_behavior.ChartBehavior._check(commonBehavior);
    }
    get role() {
      return "PanAndZoom";
    }
    _equals(other) {
      if (other == null) return false;
      return pan_and_zoom_behavior$.PanAndZoomBehavior.is(other) && dart.equals(other.panningCompletedCallback, this.panningCompletedCallback);
    }
    get hashCode() {
      return dart.hashCode(this.panningCompletedCallback);
    }
  };
  (pan_and_zoom_behavior$.PanAndZoomBehavior.new = function(opts) {
    let panningCompletedCallback = opts && 'panningCompletedCallback' in opts ? opts.panningCompletedCallback : null;
    this[_desiredGestures$] = LinkedHashSetOfGestureType().from([chart_behavior$.GestureType.onDrag]);
    this[panningCompletedCallback$0] = panningCompletedCallback;
    ;
  }).prototype = pan_and_zoom_behavior$.PanAndZoomBehavior.prototype;
  dart.addTypeTests(pan_and_zoom_behavior$.PanAndZoomBehavior);
  dart.setMethodSignature(pan_and_zoom_behavior$.PanAndZoomBehavior, () => ({
    __proto__: dart.getMethods(pan_and_zoom_behavior$.PanAndZoomBehavior.__proto__),
    createCommonBehavior: dart.gFnType(D => [pan_and_zoom_behavior.PanAndZoomBehavior$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(pan_and_zoom_behavior$.PanAndZoomBehavior, () => ({
    __proto__: dart.getGetters(pan_and_zoom_behavior$.PanAndZoomBehavior.__proto__),
    desiredGestures: core.Set$(chart_behavior$.GestureType),
    role: core.String
  }));
  dart.setLibraryUri(pan_and_zoom_behavior$.PanAndZoomBehavior, "package:charts_flutter/src/behaviors/zoom/pan_and_zoom_behavior.dart");
  dart.setFieldSignature(pan_and_zoom_behavior$.PanAndZoomBehavior, () => ({
    __proto__: dart.getFields(pan_and_zoom_behavior$.PanAndZoomBehavior.__proto__),
    [_desiredGestures$]: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    panningCompletedCallback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.defineExtensionMethods(pan_and_zoom_behavior$.PanAndZoomBehavior, ['_equals']);
  dart.defineExtensionAccessors(pan_and_zoom_behavior$.PanAndZoomBehavior, ['hashCode']);
  const _is_FlutterPanAndZoomBehavior_default = Symbol('_is_FlutterPanAndZoomBehavior_default');
  pan_and_zoom_behavior$.FlutterPanAndZoomBehavior$ = dart.generic(D => {
    const PanAndZoomBehavior_FlutterPanBehaviorMixin$36 = class PanAndZoomBehavior_FlutterPanBehaviorMixin extends pan_and_zoom_behavior.PanAndZoomBehavior$(D) {};
    (PanAndZoomBehavior_FlutterPanBehaviorMixin$36.new = function() {
      pan_behavior$.FlutterPanBehaviorMixin$(D)[dart.mixinNew].call(this);
      PanAndZoomBehavior_FlutterPanBehaviorMixin$36.__proto__.new.call(this);
    }).prototype = PanAndZoomBehavior_FlutterPanBehaviorMixin$36.prototype;
    dart.applyMixin(PanAndZoomBehavior_FlutterPanBehaviorMixin$36, pan_behavior$.FlutterPanBehaviorMixin$(D));
    class FlutterPanAndZoomBehavior extends PanAndZoomBehavior_FlutterPanBehaviorMixin$36 {}
    (FlutterPanAndZoomBehavior.new = function() {
      FlutterPanAndZoomBehavior.__proto__.new.call(this);
      ;
    }).prototype = FlutterPanAndZoomBehavior.prototype;
    dart.addTypeTests(FlutterPanAndZoomBehavior);
    FlutterPanAndZoomBehavior.prototype[_is_FlutterPanAndZoomBehavior_default] = true;
    dart.setLibraryUri(FlutterPanAndZoomBehavior, "package:charts_flutter/src/behaviors/zoom/pan_and_zoom_behavior.dart");
    return FlutterPanAndZoomBehavior;
  });
  pan_and_zoom_behavior$.FlutterPanAndZoomBehavior = pan_and_zoom_behavior$.FlutterPanAndZoomBehavior$();
  dart.addTypeTests(pan_and_zoom_behavior$.FlutterPanAndZoomBehavior, _is_FlutterPanAndZoomBehavior_default);
  const desiredGestures$1 = dart.privateName(initial_hint_behavior$, "InitialHintBehavior.desiredGestures");
  const hintDuration$ = dart.privateName(initial_hint_behavior$, "InitialHintBehavior.hintDuration");
  const maxHintTranslate$ = dart.privateName(initial_hint_behavior$, "InitialHintBehavior.maxHintTranslate");
  const maxHintScaleFactor$ = dart.privateName(initial_hint_behavior$, "InitialHintBehavior.maxHintScaleFactor");
  initial_hint_behavior$.InitialHintBehavior = class InitialHintBehavior extends chart_behavior$.ChartBehavior$(initial_hint_behavior.InitialHintBehavior) {
    get desiredGestures() {
      return this[desiredGestures$1];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get hintDuration() {
      return this[hintDuration$];
    }
    set hintDuration(value) {
      super.hintDuration = value;
    }
    get maxHintTranslate() {
      return this[maxHintTranslate$];
    }
    set maxHintTranslate(value) {
      super.maxHintTranslate = value;
    }
    get maxHintScaleFactor() {
      return this[maxHintScaleFactor$];
    }
    set maxHintScaleFactor(value) {
      super.maxHintScaleFactor = value;
    }
    createCommonBehavior(D) {
      let behavior = new (initial_hint_behavior$.FlutterInitialHintBehavior$(D)).new();
      if (this.hintDuration != null) {
        behavior.hintDuration = this.hintDuration;
      }
      if (this.maxHintTranslate != null) {
        behavior.maxHintTranslate = this.maxHintTranslate;
      }
      if (this.maxHintScaleFactor != null) {
        behavior.maxHintScaleFactor = this.maxHintScaleFactor;
      }
      return behavior;
    }
    updateCommonBehavior(commonBehavior) {
      chart_behavior.ChartBehavior._check(commonBehavior);
    }
    get role() {
      return "InitialHint";
    }
    _equals(other) {
      if (other == null) return false;
      return initial_hint_behavior$.InitialHintBehavior.is(other) && dart.equals(other.hintDuration, this.hintDuration);
    }
    get hashCode() {
      return dart.hashCode(this.hintDuration);
    }
  };
  (initial_hint_behavior$.InitialHintBehavior.new = function(opts) {
    let hintDuration = opts && 'hintDuration' in opts ? opts.hintDuration : null;
    let maxHintTranslate = opts && 'maxHintTranslate' in opts ? opts.maxHintTranslate : null;
    let maxHintScaleFactor = opts && 'maxHintScaleFactor' in opts ? opts.maxHintScaleFactor : null;
    this[desiredGestures$1] = new (_HashSetOfGestureType()).new();
    this[hintDuration$] = hintDuration;
    this[maxHintTranslate$] = maxHintTranslate;
    this[maxHintScaleFactor$] = maxHintScaleFactor;
    ;
  }).prototype = initial_hint_behavior$.InitialHintBehavior.prototype;
  dart.addTypeTests(initial_hint_behavior$.InitialHintBehavior);
  dart.setMethodSignature(initial_hint_behavior$.InitialHintBehavior, () => ({
    __proto__: dart.getMethods(initial_hint_behavior$.InitialHintBehavior.__proto__),
    createCommonBehavior: dart.gFnType(D => [initial_hint_behavior.InitialHintBehavior$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(initial_hint_behavior$.InitialHintBehavior, () => ({
    __proto__: dart.getGetters(initial_hint_behavior$.InitialHintBehavior.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(initial_hint_behavior$.InitialHintBehavior, "package:charts_flutter/src/behaviors/zoom/initial_hint_behavior.dart");
  dart.setFieldSignature(initial_hint_behavior$.InitialHintBehavior, () => ({
    __proto__: dart.getFields(initial_hint_behavior$.InitialHintBehavior.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    hintDuration: dart.finalFieldType(core.Duration),
    maxHintTranslate: dart.finalFieldType(core.double),
    maxHintScaleFactor: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(initial_hint_behavior$.InitialHintBehavior, ['_equals']);
  dart.defineExtensionAccessors(initial_hint_behavior$.InitialHintBehavior, ['hashCode']);
  const _hintAnimator = dart.privateName(initial_hint_behavior$, "_hintAnimator");
  const _chartState$0 = dart.privateName(initial_hint_behavior$, "_chartState");
  const _skippedFirstTick = dart.privateName(initial_hint_behavior$, "_skippedFirstTick");
  const _is_FlutterInitialHintBehavior_default = Symbol('_is_FlutterInitialHintBehavior_default');
  initial_hint_behavior$.FlutterInitialHintBehavior$ = dart.generic(D => {
    let BaseChartOfD = () => (BaseChartOfD = dart.constFn(base_chart.BaseChart$(D)))();
    class FlutterInitialHintBehavior extends initial_hint_behavior.InitialHintBehavior$(D) {
      set chartState(chartState) {
        let t0;
        if (!(chartState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/charts_flutter/src/behaviors/zoom/initial_hint_behavior.dart", 80, 12, "chartState != null");
        this[_chartState$0] = chartState;
        this[_hintAnimator] = this[_chartState$0].getAnimationController(this);
        t0 = this[_hintAnimator];
        t0 == null ? null : t0.addListener(dart.bind(this, 'onHintTick'));
      }
      startHintAnimation() {
        let t0;
        super.startHintAnimation();
        t0 = this[_hintAnimator];
        t0.duration = this.hintDuration;
        t0.forward({from: 0.0});
        t0;
      }
      stopHintAnimation() {
        let t0;
        super.stopHintAnimation();
        t0 = this[_hintAnimator];
        t0 == null ? null : t0.stop();
        this[_chartState$0].disposeAnimationController(this);
        this[_hintAnimator] = null;
      }
      get hintAnimationPercent() {
        return this[_hintAnimator].value;
      }
      onHintTick() {
        if (dart.test(this[_skippedFirstTick])) {
          this[_skippedFirstTick] = false;
          return;
        }
        super.onHintTick();
      }
      removeFrom(chart) {
        BaseChartOfD()._check(chart);
        this[_chartState$0].disposeAnimationController(this);
        this[_hintAnimator] = null;
        super.removeFrom(chart);
      }
    }
    (FlutterInitialHintBehavior.new = function() {
      this[_hintAnimator] = null;
      this[_chartState$0] = null;
      this[_skippedFirstTick] = true;
      FlutterInitialHintBehavior.__proto__.new.call(this);
      ;
    }).prototype = FlutterInitialHintBehavior.prototype;
    dart.addTypeTests(FlutterInitialHintBehavior);
    FlutterInitialHintBehavior.prototype[_is_FlutterInitialHintBehavior_default] = true;
    FlutterInitialHintBehavior[dart.implements] = () => [chart_behavior$.ChartStateBehavior$(chart_behavior.ChartBehavior)];
    dart.setGetterSignature(FlutterInitialHintBehavior, () => ({
      __proto__: dart.getGetters(FlutterInitialHintBehavior.__proto__),
      hintAnimationPercent: core.double
    }));
    dart.setSetterSignature(FlutterInitialHintBehavior, () => ({
      __proto__: dart.getSetters(FlutterInitialHintBehavior.__proto__),
      chartState: base_chart_state.BaseChartState
    }));
    dart.setLibraryUri(FlutterInitialHintBehavior, "package:charts_flutter/src/behaviors/zoom/initial_hint_behavior.dart");
    dart.setFieldSignature(FlutterInitialHintBehavior, () => ({
      __proto__: dart.getFields(FlutterInitialHintBehavior.__proto__),
      [_hintAnimator]: dart.fieldType(animation_controller.AnimationController),
      [_chartState$0]: dart.fieldType(base_chart_state.BaseChartState),
      [_skippedFirstTick]: dart.fieldType(core.bool)
    }));
    return FlutterInitialHintBehavior;
  });
  initial_hint_behavior$.FlutterInitialHintBehavior = initial_hint_behavior$.FlutterInitialHintBehavior$();
  dart.addTypeTests(initial_hint_behavior$.FlutterInitialHintBehavior, _is_FlutterInitialHintBehavior_default);
  const desiredGestures$2 = dart.privateName(slider$, "Slider.desiredGestures");
  const eventTrigger$0 = dart.privateName(slider$, "Slider.eventTrigger");
  const layoutPaintOrder$ = dart.privateName(slider$, "Slider.layoutPaintOrder");
  const initialDomainValue$ = dart.privateName(slider$, "Slider.initialDomainValue");
  const onChangeCallback$ = dart.privateName(slider$, "Slider.onChangeCallback");
  const roleId$ = dart.privateName(slider$, "Slider.roleId");
  const snapToDatum$ = dart.privateName(slider$, "Slider.snapToDatum");
  const style$ = dart.privateName(slider$, "Slider.style");
  const handleRenderer$ = dart.privateName(slider$, "Slider.handleRenderer");
  slider$.Slider = class Slider extends chart_behavior$.ChartBehavior$(slider.Slider) {
    get desiredGestures() {
      return this[desiredGestures$2];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get eventTrigger() {
      return this[eventTrigger$0];
    }
    set eventTrigger(value) {
      super.eventTrigger = value;
    }
    get layoutPaintOrder() {
      return this[layoutPaintOrder$];
    }
    set layoutPaintOrder(value) {
      super.layoutPaintOrder = value;
    }
    get initialDomainValue() {
      return this[initialDomainValue$];
    }
    set initialDomainValue(value) {
      super.initialDomainValue = value;
    }
    get onChangeCallback() {
      return this[onChangeCallback$];
    }
    set onChangeCallback(value) {
      super.onChangeCallback = value;
    }
    get roleId() {
      return this[roleId$];
    }
    set roleId(value) {
      super.roleId = value;
    }
    get snapToDatum() {
      return this[snapToDatum$];
    }
    set snapToDatum(value) {
      super.snapToDatum = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get handleRenderer() {
      return this[handleRenderer$];
    }
    set handleRenderer(value) {
      super.handleRenderer = value;
    }
    static new(opts) {
      let eventTrigger = opts && 'eventTrigger' in opts ? opts.eventTrigger : null;
      let handleRenderer = opts && 'handleRenderer' in opts ? opts.handleRenderer : null;
      let initialDomainValue = opts && 'initialDomainValue' in opts ? opts.initialDomainValue : null;
      let roleId = opts && 'roleId' in opts ? opts.roleId : null;
      let onChangeCallback = opts && 'onChangeCallback' in opts ? opts.onChangeCallback : null;
      let snapToDatum = opts && 'snapToDatum' in opts ? opts.snapToDatum : false;
      let style = opts && 'style' in opts ? opts.style : null;
      let layoutPaintOrder = opts && 'layoutPaintOrder' in opts ? opts.layoutPaintOrder : 150;
      eventTrigger == null ? eventTrigger = selection_trigger.SelectionTrigger.tapAndDrag : null;
      handleRenderer == null ? handleRenderer = new symbol_renderer.RectSymbolRenderer.new() : null;
      style == null ? style = new slider.SliderStyle.new({handleSize: new (RectangleOfint()).new(0, 0, 20, 30)}) : null;
      return new slider$.Slider._internal({eventTrigger: eventTrigger, handleRenderer: handleRenderer, initialDomainValue: initialDomainValue, onChangeCallback: onChangeCallback, roleId: roleId, snapToDatum: snapToDatum, style: style, desiredGestures: slider$.Slider._getDesiredGestures(eventTrigger), layoutPaintOrder: layoutPaintOrder});
    }
    static _getDesiredGestures(eventTrigger) {
      let t0, t0$;
      let desiredGestures = new (_HashSetOfGestureType()).new();
      switch (eventTrigger) {
        case C56 || CT.C56:
        {
          t0 = desiredGestures;
          t0.add(chart_behavior$.GestureType.onTap);
          t0.add(chart_behavior$.GestureType.onDrag);
          t0;
          break;
        }
        case C57 || CT.C57:
        case C58 || CT.C58:
        {
          t0$ = desiredGestures;
          t0$.add(chart_behavior$.GestureType.onTap);
          t0$.add(chart_behavior$.GestureType.onLongPress);
          t0$.add(chart_behavior$.GestureType.onDrag);
          t0$;
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Slider does not support the event trigger " + ("\"" + dart.str(eventTrigger) + "\"")));
          break;
        }
      }
      return desiredGestures;
    }
    createCommonBehavior(D) {
      return new (slider.Slider$(D)).new({eventTrigger: this.eventTrigger, handleRenderer: this.handleRenderer, initialDomainValue: D.as(this.initialDomainValue), onChangeCallback: this.onChangeCallback, roleId: this.roleId, snapToDatum: this.snapToDatum, style: this.style});
    }
    updateCommonBehavior(commonBehavior) {
      slider.Slider._check(commonBehavior);
    }
    get role() {
      return "Slider-" + dart.str(dart.toString(this.eventTrigger));
    }
    _equals(o) {
      if (o == null) return false;
      return slider$.Slider.is(o) && dart.equals(this.eventTrigger, o.eventTrigger) && dart.equals(this.handleRenderer, o.handleRenderer) && dart.equals(this.initialDomainValue, o.initialDomainValue) && dart.equals(this.onChangeCallback, o.onChangeCallback) && this.roleId == o.roleId && dart.equals(this.snapToDatum, o.snapToDatum) && dart.equals(this.style, o.style) && this.layoutPaintOrder == o.layoutPaintOrder;
    }
    get hashCode() {
      return ui.hashValues(this.eventTrigger, this.handleRenderer, this.initialDomainValue, this.roleId, this.snapToDatum, this.style, this.layoutPaintOrder);
    }
  };
  (slider$.Slider._internal = function(opts) {
    let eventTrigger = opts && 'eventTrigger' in opts ? opts.eventTrigger : null;
    let onChangeCallback = opts && 'onChangeCallback' in opts ? opts.onChangeCallback : null;
    let initialDomainValue = opts && 'initialDomainValue' in opts ? opts.initialDomainValue : null;
    let roleId = opts && 'roleId' in opts ? opts.roleId : null;
    let snapToDatum = opts && 'snapToDatum' in opts ? opts.snapToDatum : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let handleRenderer = opts && 'handleRenderer' in opts ? opts.handleRenderer : null;
    let desiredGestures = opts && 'desiredGestures' in opts ? opts.desiredGestures : null;
    let layoutPaintOrder = opts && 'layoutPaintOrder' in opts ? opts.layoutPaintOrder : null;
    this[eventTrigger$0] = eventTrigger;
    this[onChangeCallback$] = onChangeCallback;
    this[initialDomainValue$] = initialDomainValue;
    this[roleId$] = roleId;
    this[snapToDatum$] = snapToDatum;
    this[style$] = style;
    this[handleRenderer$] = handleRenderer;
    this[desiredGestures$2] = desiredGestures;
    this[layoutPaintOrder$] = layoutPaintOrder;
    ;
  }).prototype = slider$.Slider.prototype;
  dart.addTypeTests(slider$.Slider);
  dart.setMethodSignature(slider$.Slider, () => ({
    __proto__: dart.getMethods(slider$.Slider.__proto__),
    createCommonBehavior: dart.gFnType(D => [slider.Slider$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(slider$.Slider, () => ({
    __proto__: dart.getGetters(slider$.Slider.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(slider$.Slider, "package:charts_flutter/src/behaviors/slider/slider.dart");
  dart.setFieldSignature(slider$.Slider, () => ({
    __proto__: dart.getFields(slider$.Slider.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    eventTrigger: dart.finalFieldType(selection_trigger.SelectionTrigger),
    layoutPaintOrder: dart.finalFieldType(core.int),
    initialDomainValue: dart.finalFieldType(dart.dynamic),
    onChangeCallback: dart.finalFieldType(dart.fnType(dart.dynamic, [math.Point$(core.int), dart.dynamic, core.String, slider.SliderListenerDragState])),
    roleId: dart.finalFieldType(core.String),
    snapToDatum: dart.finalFieldType(core.bool),
    style: dart.finalFieldType(slider.SliderStyle),
    handleRenderer: dart.finalFieldType(symbol_renderer.SymbolRenderer)
  }));
  dart.defineExtensionMethods(slider$.Slider, ['_equals']);
  dart.defineExtensionAccessors(slider$.Slider, ['hashCode']);
  const desiredGestures$3 = dart.privateName(range_annotation$, "RangeAnnotation.desiredGestures");
  const annotations$ = dart.privateName(range_annotation$, "RangeAnnotation.annotations");
  const defaultLabelAnchor$ = dart.privateName(range_annotation$, "RangeAnnotation.defaultLabelAnchor");
  const defaultLabelDirection$ = dart.privateName(range_annotation$, "RangeAnnotation.defaultLabelDirection");
  const defaultLabelPosition$ = dart.privateName(range_annotation$, "RangeAnnotation.defaultLabelPosition");
  const defaultLabelStyleSpec$ = dart.privateName(range_annotation$, "RangeAnnotation.defaultLabelStyleSpec");
  const defaultColor$ = dart.privateName(range_annotation$, "RangeAnnotation.defaultColor");
  const extendAxis$ = dart.privateName(range_annotation$, "RangeAnnotation.extendAxis");
  const labelPadding$ = dart.privateName(range_annotation$, "RangeAnnotation.labelPadding");
  range_annotation$.RangeAnnotation = class RangeAnnotation extends chart_behavior$.ChartBehavior$(range_annotation.RangeAnnotation) {
    get desiredGestures() {
      return this[desiredGestures$3];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get annotations() {
      return this[annotations$];
    }
    set annotations(value) {
      super.annotations = value;
    }
    get defaultLabelAnchor() {
      return this[defaultLabelAnchor$];
    }
    set defaultLabelAnchor(value) {
      super.defaultLabelAnchor = value;
    }
    get defaultLabelDirection() {
      return this[defaultLabelDirection$];
    }
    set defaultLabelDirection(value) {
      super.defaultLabelDirection = value;
    }
    get defaultLabelPosition() {
      return this[defaultLabelPosition$];
    }
    set defaultLabelPosition(value) {
      super.defaultLabelPosition = value;
    }
    get defaultLabelStyleSpec() {
      return this[defaultLabelStyleSpec$];
    }
    set defaultLabelStyleSpec(value) {
      super.defaultLabelStyleSpec = value;
    }
    get defaultColor() {
      return this[defaultColor$];
    }
    set defaultColor(value) {
      super.defaultColor = value;
    }
    get extendAxis() {
      return this[extendAxis$];
    }
    set extendAxis(value) {
      super.extendAxis = value;
    }
    get labelPadding() {
      return this[labelPadding$];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    createCommonBehavior(D) {
      return new (range_annotation.RangeAnnotation$(D)).new(this.annotations, {defaultColor: this.defaultColor, defaultLabelAnchor: this.defaultLabelAnchor, defaultLabelDirection: this.defaultLabelDirection, defaultLabelPosition: this.defaultLabelPosition, defaultLabelStyleSpec: this.defaultLabelStyleSpec, extendAxis: this.extendAxis, labelPadding: this.labelPadding});
    }
    updateCommonBehavior(commonBehavior) {
      range_annotation.RangeAnnotation._check(commonBehavior);
    }
    get role() {
      return "RangeAnnotation";
    }
    _equals(o) {
      if (o == null) return false;
      return range_annotation$.RangeAnnotation.is(o) && dart.test(new equality.ListEquality.new().equals(this.annotations, o.annotations)) && dart.equals(this.defaultColor, o.defaultColor) && dart.equals(this.extendAxis, o.extendAxis) && dart.equals(this.defaultLabelAnchor, o.defaultLabelAnchor) && dart.equals(this.defaultLabelDirection, o.defaultLabelDirection) && dart.equals(this.defaultLabelPosition, o.defaultLabelPosition) && dart.equals(this.defaultLabelStyleSpec, o.defaultLabelStyleSpec) && this.labelPadding == o.labelPadding;
    }
    get hashCode() {
      return ui.hashValues(this.annotations, this.defaultColor, this.extendAxis, this.defaultLabelAnchor, this.defaultLabelDirection, this.defaultLabelPosition, this.defaultLabelStyleSpec, this.labelPadding);
    }
  };
  (range_annotation$.RangeAnnotation.new = function(annotations, opts) {
    let defaultColor = opts && 'defaultColor' in opts ? opts.defaultColor : null;
    let defaultLabelAnchor = opts && 'defaultLabelAnchor' in opts ? opts.defaultLabelAnchor : null;
    let defaultLabelDirection = opts && 'defaultLabelDirection' in opts ? opts.defaultLabelDirection : null;
    let defaultLabelPosition = opts && 'defaultLabelPosition' in opts ? opts.defaultLabelPosition : null;
    let defaultLabelStyleSpec = opts && 'defaultLabelStyleSpec' in opts ? opts.defaultLabelStyleSpec : null;
    let extendAxis = opts && 'extendAxis' in opts ? opts.extendAxis : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    this[desiredGestures$3] = new (_HashSetOfGestureType()).new();
    this[annotations$] = annotations;
    this[defaultLabelAnchor$] = defaultLabelAnchor;
    this[defaultLabelDirection$] = defaultLabelDirection;
    this[defaultLabelPosition$] = defaultLabelPosition;
    this[defaultLabelStyleSpec$] = defaultLabelStyleSpec;
    this[extendAxis$] = extendAxis;
    this[labelPadding$] = labelPadding;
    this[defaultColor$] = material_palette.MaterialPalette.gray.shade100;
    ;
  }).prototype = range_annotation$.RangeAnnotation.prototype;
  dart.addTypeTests(range_annotation$.RangeAnnotation);
  dart.setMethodSignature(range_annotation$.RangeAnnotation, () => ({
    __proto__: dart.getMethods(range_annotation$.RangeAnnotation.__proto__),
    createCommonBehavior: dart.gFnType(D => [range_annotation.RangeAnnotation$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(range_annotation$.RangeAnnotation, () => ({
    __proto__: dart.getGetters(range_annotation$.RangeAnnotation.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(range_annotation$.RangeAnnotation, "package:charts_flutter/src/behaviors/range_annotation.dart");
  dart.setFieldSignature(range_annotation$.RangeAnnotation, () => ({
    __proto__: dart.getFields(range_annotation$.RangeAnnotation.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    annotations: dart.finalFieldType(core.List$(range_annotation.AnnotationSegment)),
    defaultLabelAnchor: dart.finalFieldType(range_annotation.AnnotationLabelAnchor),
    defaultLabelDirection: dart.finalFieldType(range_annotation.AnnotationLabelDirection),
    defaultLabelPosition: dart.finalFieldType(range_annotation.AnnotationLabelPosition),
    defaultLabelStyleSpec: dart.finalFieldType(axis_spec.TextStyleSpec),
    defaultColor: dart.finalFieldType(color$.Color),
    extendAxis: dart.finalFieldType(core.bool),
    labelPadding: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(range_annotation$.RangeAnnotation, ['_equals']);
  dart.defineExtensionAccessors(range_annotation$.RangeAnnotation, ['hashCode']);
  const desiredGestures$4 = dart.privateName(series_legend$, "SeriesLegend.desiredGestures");
  const selectionModelType$2 = dart.privateName(series_legend$, "SeriesLegend.selectionModelType");
  const contentBuilder$ = dart.privateName(series_legend$, "SeriesLegend.contentBuilder");
  const position$ = dart.privateName(series_legend$, "SeriesLegend.position");
  const outsideJustification$ = dart.privateName(series_legend$, "SeriesLegend.outsideJustification");
  const insideJustification$ = dart.privateName(series_legend$, "SeriesLegend.insideJustification");
  const showMeasures$ = dart.privateName(series_legend$, "SeriesLegend.showMeasures");
  const legendDefaultMeasure$ = dart.privateName(series_legend$, "SeriesLegend.legendDefaultMeasure");
  const measureFormatter$ = dart.privateName(series_legend$, "SeriesLegend.measureFormatter");
  const secondaryMeasureFormatter$ = dart.privateName(series_legend$, "SeriesLegend.secondaryMeasureFormatter");
  const entryTextStyle$ = dart.privateName(series_legend$, "SeriesLegend.entryTextStyle");
  const defaultHiddenSeries$ = dart.privateName(series_legend$, "SeriesLegend.defaultHiddenSeries");
  let C108;
  series_legend$.SeriesLegend = class SeriesLegend extends chart_behavior$.ChartBehavior$(series_legend.SeriesLegend) {
    get desiredGestures() {
      return this[desiredGestures$4];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$2];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    get contentBuilder() {
      return this[contentBuilder$];
    }
    set contentBuilder(value) {
      super.contentBuilder = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get outsideJustification() {
      return this[outsideJustification$];
    }
    set outsideJustification(value) {
      super.outsideJustification = value;
    }
    get insideJustification() {
      return this[insideJustification$];
    }
    set insideJustification(value) {
      super.insideJustification = value;
    }
    get showMeasures() {
      return this[showMeasures$];
    }
    set showMeasures(value) {
      super.showMeasures = value;
    }
    get legendDefaultMeasure() {
      return this[legendDefaultMeasure$];
    }
    set legendDefaultMeasure(value) {
      super.legendDefaultMeasure = value;
    }
    get measureFormatter() {
      return this[measureFormatter$];
    }
    set measureFormatter(value) {
      super.measureFormatter = value;
    }
    get secondaryMeasureFormatter() {
      return this[secondaryMeasureFormatter$];
    }
    set secondaryMeasureFormatter(value) {
      super.secondaryMeasureFormatter = value;
    }
    get entryTextStyle() {
      return this[entryTextStyle$];
    }
    set entryTextStyle(value) {
      super.entryTextStyle = value;
    }
    get defaultHiddenSeries() {
      return this[defaultHiddenSeries$];
    }
    set defaultHiddenSeries(value) {
      super.defaultHiddenSeries = value;
    }
    static new(opts) {
      let t0, t0$;
      let position = opts && 'position' in opts ? opts.position : null;
      let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
      let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
      let horizontalFirst = opts && 'horizontalFirst' in opts ? opts.horizontalFirst : null;
      let desiredMaxRows = opts && 'desiredMaxRows' in opts ? opts.desiredMaxRows : null;
      let desiredMaxColumns = opts && 'desiredMaxColumns' in opts ? opts.desiredMaxColumns : null;
      let cellPadding = opts && 'cellPadding' in opts ? opts.cellPadding : null;
      let defaultHiddenSeries = opts && 'defaultHiddenSeries' in opts ? opts.defaultHiddenSeries : null;
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
      let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
      let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
      let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
      position == null ? position = series_legend$.SeriesLegend.defaultBehaviorPosition : null;
      outsideJustification == null ? outsideJustification = series_legend$.SeriesLegend.defaultOutsideJustification : null;
      insideJustification == null ? insideJustification = series_legend$.SeriesLegend.defaultInsideJustification : null;
      cellPadding == null ? cellPadding = series_legend$.SeriesLegend.defaultCellPadding : null;
      horizontalFirst == null ? horizontalFirst = dart.equals(position, chart_behavior.BehaviorPosition.top) || dart.equals(position, chart_behavior.BehaviorPosition.bottom) || dart.equals(position, chart_behavior.BehaviorPosition.inside) : null;
      let layoutBuilder = dart.test(horizontalFirst) ? legend_layout.TabularLegendLayout.horizontalFirst({desiredMaxColumns: desiredMaxColumns, cellPadding: cellPadding}) : legend_layout.TabularLegendLayout.verticalFirst({desiredMaxRows: desiredMaxRows, cellPadding: cellPadding});
      return new series_legend$.SeriesLegend._internal({contentBuilder: new legend_content_builder.TabularLegendContentBuilder.new({legendLayout: layoutBuilder}), selectionModelType: selection_model.SelectionModelType.info, position: position, outsideJustification: outsideJustification, insideJustification: insideJustification, defaultHiddenSeries: defaultHiddenSeries, showMeasures: (t0 = showMeasures, t0 == null ? false : t0), legendDefaultMeasure: (t0$ = legendDefaultMeasure, t0$ == null ? legend_entry_generator.LegendDefaultMeasure.none : t0$), measureFormatter: measureFormatter, secondaryMeasureFormatter: secondaryMeasureFormatter, entryTextStyle: entryTextStyle});
    }
    static customLayout(contentBuilder, opts) {
      let t0, t0$;
      let position = opts && 'position' in opts ? opts.position : null;
      let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
      let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
      let defaultHiddenSeries = opts && 'defaultHiddenSeries' in opts ? opts.defaultHiddenSeries : null;
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
      let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
      let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
      let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
      position == null ? position = series_legend$.SeriesLegend.defaultBehaviorPosition : null;
      outsideJustification == null ? outsideJustification = series_legend$.SeriesLegend.defaultOutsideJustification : null;
      insideJustification == null ? insideJustification = series_legend$.SeriesLegend.defaultInsideJustification : null;
      return new series_legend$.SeriesLegend._internal({contentBuilder: contentBuilder, selectionModelType: selection_model.SelectionModelType.info, position: position, outsideJustification: outsideJustification, insideJustification: insideJustification, defaultHiddenSeries: defaultHiddenSeries, showMeasures: (t0 = showMeasures, t0 == null ? false : t0), legendDefaultMeasure: (t0$ = legendDefaultMeasure, t0$ == null ? legend_entry_generator.LegendDefaultMeasure.none : t0$), measureFormatter: measureFormatter, secondaryMeasureFormatter: secondaryMeasureFormatter, entryTextStyle: entryTextStyle});
    }
    createCommonBehavior(D) {
      return new (series_legend$._FlutterSeriesLegend$(D)).new(this);
    }
    updateCommonBehavior(commonBehavior) {
      series_legend.SeriesLegend._check(commonBehavior);
      series_legend$._FlutterSeriesLegend.as(commonBehavior).config = this;
    }
    get role() {
      return "legend";
    }
    _equals(o) {
      if (o == null) return false;
      return series_legend$.SeriesLegend.is(o) && dart.equals(this.selectionModelType, o.selectionModelType) && dart.equals(this.contentBuilder, o.contentBuilder) && dart.equals(this.position, o.position) && dart.equals(this.outsideJustification, o.outsideJustification) && dart.equals(this.insideJustification, o.insideJustification) && dart.test(new equality.ListEquality.new().equals(this.defaultHiddenSeries, o.defaultHiddenSeries)) && dart.equals(this.showMeasures, o.showMeasures) && dart.equals(this.legendDefaultMeasure, o.legendDefaultMeasure) && dart.equals(this.measureFormatter, o.measureFormatter) && dart.equals(this.secondaryMeasureFormatter, o.secondaryMeasureFormatter) && dart.equals(this.entryTextStyle, o.entryTextStyle);
    }
    get hashCode() {
      return ui.hashValues(this.selectionModelType, this.contentBuilder, this.position, this.outsideJustification, this.insideJustification, this.defaultHiddenSeries, this.showMeasures, this.legendDefaultMeasure, this.measureFormatter, this.secondaryMeasureFormatter, this.entryTextStyle);
    }
  };
  (series_legend$.SeriesLegend._internal = function(opts) {
    let contentBuilder = opts && 'contentBuilder' in opts ? opts.contentBuilder : null;
    let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
    let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
    let defaultHiddenSeries = opts && 'defaultHiddenSeries' in opts ? opts.defaultHiddenSeries : null;
    let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
    let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
    let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
    let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
    let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
    this[desiredGestures$4] = new (_HashSetOfGestureType()).new();
    this[contentBuilder$] = contentBuilder;
    this[selectionModelType$2] = selectionModelType;
    this[position$] = position;
    this[outsideJustification$] = outsideJustification;
    this[insideJustification$] = insideJustification;
    this[defaultHiddenSeries$] = defaultHiddenSeries;
    this[showMeasures$] = showMeasures;
    this[legendDefaultMeasure$] = legendDefaultMeasure;
    this[measureFormatter$] = measureFormatter;
    this[secondaryMeasureFormatter$] = secondaryMeasureFormatter;
    this[entryTextStyle$] = entryTextStyle;
    ;
  }).prototype = series_legend$.SeriesLegend.prototype;
  dart.addTypeTests(series_legend$.SeriesLegend);
  dart.setMethodSignature(series_legend$.SeriesLegend, () => ({
    __proto__: dart.getMethods(series_legend$.SeriesLegend.__proto__),
    createCommonBehavior: dart.gFnType(D => [series_legend.SeriesLegend$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(series_legend$.SeriesLegend, () => ({
    __proto__: dart.getGetters(series_legend$.SeriesLegend.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(series_legend$.SeriesLegend, "package:charts_flutter/src/behaviors/legend/series_legend.dart");
  dart.setFieldSignature(series_legend$.SeriesLegend, () => ({
    __proto__: dart.getFields(series_legend$.SeriesLegend.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType),
    contentBuilder: dart.finalFieldType(legend_content_builder.LegendContentBuilder),
    position: dart.finalFieldType(chart_behavior.BehaviorPosition),
    outsideJustification: dart.finalFieldType(chart_behavior.OutsideJustification),
    insideJustification: dart.finalFieldType(chart_behavior.InsideJustification),
    showMeasures: dart.finalFieldType(core.bool),
    legendDefaultMeasure: dart.finalFieldType(legend_entry_generator.LegendDefaultMeasure),
    measureFormatter: dart.finalFieldType(dart.fnType(core.String, [core.num])),
    secondaryMeasureFormatter: dart.finalFieldType(dart.fnType(core.String, [core.num])),
    entryTextStyle: dart.finalFieldType(axis_spec.TextStyleSpec),
    defaultHiddenSeries: dart.finalFieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(series_legend$.SeriesLegend, ['_equals']);
  dart.defineExtensionAccessors(series_legend$.SeriesLegend, ['hashCode']);
  dart.defineLazy(series_legend$.SeriesLegend, {
    /*series_legend$.SeriesLegend.defaultBehaviorPosition*/get defaultBehaviorPosition() {
      return C108 || CT.C108;
    },
    /*series_legend$.SeriesLegend.defaultOutsideJustification*/get defaultOutsideJustification() {
      return C27 || CT.C27;
    },
    /*series_legend$.SeriesLegend.defaultInsideJustification*/get defaultInsideJustification() {
      return C33 || CT.C33;
    },
    /*series_legend$.SeriesLegend.defaultCellPadding*/get defaultCellPadding() {
      return C72 || CT.C72;
    }
  });
  const _hideSeries = dart.privateName(series_legend$, "_hideSeries");
  const _name$5 = dart.privateName(legend, "_name");
  let C109;
  let C110;
  const _is__FlutterSeriesLegend_default = Symbol('_is__FlutterSeriesLegend_default');
  series_legend$._FlutterSeriesLegend$ = dart.generic(D => {
    let LegendEntryOfD = () => (LegendEntryOfD = dart.constFn(legend_entry.LegendEntry$(D)))();
    let LegendEntryOfDTobool = () => (LegendEntryOfDTobool = dart.constFn(dart.fnType(core.bool, [LegendEntryOfD()])))();
    const defaultHiddenSeries = Symbol("defaultHiddenSeries");
    const entryTextStyle = Symbol("entryTextStyle");
    class _FlutterSeriesLegend extends series_legend.SeriesLegend$(D) {
      updateLegend() {
        chart_container.ChartContainerRenderObject.as(this.chartContext).requestRebuild();
      }
      get position() {
        return this.config.position;
      }
      get outsideJustification() {
        return this.config.outsideJustification;
      }
      set outsideJustification(value) {
        super.outsideJustification = value;
      }
      get insideJustification() {
        return this.config.insideJustification;
      }
      set insideJustification(value) {
        super.insideJustification = value;
      }
      build(context) {
        let hasSelection = this.legendState.legendEntries[$any](dart.fn(entry => entry.isSelected, LegendEntryOfDTobool()));
        let showMeasures = dart.test(this.config.showMeasures) && (dart.test(hasSelection) || !dart.equals(this.legendDefaultMeasure, legend_entry_generator.LegendDefaultMeasure.none));
        return this.config.contentBuilder.build(context, this.legendState, this, {showMeasures: showMeasures});
      }
      onLegendEntryTapUp(detail) {
        switch (this.legendTapHandling) {
          case C109 || CT.C109:
          {
            this[_hideSeries](detail);
            break;
          }
          case C110 || CT.C110:
          default:
          {
            break;
          }
        }
      }
      [_hideSeries](detail) {
        let seriesId = detail.series.id;
        if (dart.test(this.isSeriesHidden(seriesId))) {
          this.showSeries(seriesId);
        } else {
          this.hideSeries(seriesId);
        }
        this.chart.redraw({skipLayout: true, skipAnimation: false});
      }
      set [defaultHiddenSeries](x) {
        super.defaultHiddenSeries = x;
      }
      set [entryTextStyle](x) {
        super.entryTextStyle = x;
      }
    }
    (_FlutterSeriesLegend.new = function(config) {
      this.config = config;
      _FlutterSeriesLegend.__proto__.new.call(this, {selectionModelType: config.selectionModelType, measureFormatter: config.measureFormatter, secondaryMeasureFormatter: config.secondaryMeasureFormatter, legendDefaultMeasure: config.legendDefaultMeasure});
      this[defaultHiddenSeries] = this.config.defaultHiddenSeries;
      this[entryTextStyle] = this.config.entryTextStyle;
    }).prototype = _FlutterSeriesLegend.prototype;
    dart.addTypeTests(_FlutterSeriesLegend);
    _FlutterSeriesLegend.prototype[_is__FlutterSeriesLegend_default] = true;
    _FlutterSeriesLegend[dart.implements] = () => [chart_behavior$.BuildableBehavior$(chart_behavior.ChartBehavior), legend$.TappableLegend];
    dart.setMethodSignature(_FlutterSeriesLegend, () => ({
      __proto__: dart.getMethods(_FlutterSeriesLegend.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      onLegendEntryTapUp: dart.fnType(dart.dynamic, [legend_entry.LegendEntry]),
      [_hideSeries]: dart.fnType(dart.void, [legend_entry.LegendEntry])
    }));
    dart.setGetterSignature(_FlutterSeriesLegend, () => ({
      __proto__: dart.getGetters(_FlutterSeriesLegend.__proto__),
      position: chart_behavior.BehaviorPosition
    }));
    dart.setLibraryUri(_FlutterSeriesLegend, "package:charts_flutter/src/behaviors/legend/series_legend.dart");
    dart.setFieldSignature(_FlutterSeriesLegend, () => ({
      __proto__: dart.getFields(_FlutterSeriesLegend.__proto__),
      config: dart.fieldType(series_legend$.SeriesLegend)
    }));
    return _FlutterSeriesLegend;
  });
  series_legend$._FlutterSeriesLegend = series_legend$._FlutterSeriesLegend$();
  dart.addTypeTests(series_legend$._FlutterSeriesLegend, _is__FlutterSeriesLegend_default);
  const desiredGestures$5 = dart.privateName(datum_legend$, "DatumLegend.desiredGestures");
  const selectionModelType$3 = dart.privateName(datum_legend$, "DatumLegend.selectionModelType");
  const contentBuilder$0 = dart.privateName(datum_legend$, "DatumLegend.contentBuilder");
  const position$0 = dart.privateName(datum_legend$, "DatumLegend.position");
  const outsideJustification$0 = dart.privateName(datum_legend$, "DatumLegend.outsideJustification");
  const insideJustification$0 = dart.privateName(datum_legend$, "DatumLegend.insideJustification");
  const showMeasures$0 = dart.privateName(datum_legend$, "DatumLegend.showMeasures");
  const legendDefaultMeasure$0 = dart.privateName(datum_legend$, "DatumLegend.legendDefaultMeasure");
  const measureFormatter$0 = dart.privateName(datum_legend$, "DatumLegend.measureFormatter");
  const secondaryMeasureFormatter$0 = dart.privateName(datum_legend$, "DatumLegend.secondaryMeasureFormatter");
  const entryTextStyle$0 = dart.privateName(datum_legend$, "DatumLegend.entryTextStyle");
  datum_legend$.DatumLegend = class DatumLegend extends chart_behavior$.ChartBehavior$(datum_legend.DatumLegend) {
    get desiredGestures() {
      return this[desiredGestures$5];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$3];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    get contentBuilder() {
      return this[contentBuilder$0];
    }
    set contentBuilder(value) {
      super.contentBuilder = value;
    }
    get position() {
      return this[position$0];
    }
    set position(value) {
      super.position = value;
    }
    get outsideJustification() {
      return this[outsideJustification$0];
    }
    set outsideJustification(value) {
      super.outsideJustification = value;
    }
    get insideJustification() {
      return this[insideJustification$0];
    }
    set insideJustification(value) {
      super.insideJustification = value;
    }
    get showMeasures() {
      return this[showMeasures$0];
    }
    set showMeasures(value) {
      super.showMeasures = value;
    }
    get legendDefaultMeasure() {
      return this[legendDefaultMeasure$0];
    }
    set legendDefaultMeasure(value) {
      super.legendDefaultMeasure = value;
    }
    get measureFormatter() {
      return this[measureFormatter$0];
    }
    set measureFormatter(value) {
      super.measureFormatter = value;
    }
    get secondaryMeasureFormatter() {
      return this[secondaryMeasureFormatter$0];
    }
    set secondaryMeasureFormatter(value) {
      super.secondaryMeasureFormatter = value;
    }
    get entryTextStyle() {
      return this[entryTextStyle$0];
    }
    set entryTextStyle(value) {
      super.entryTextStyle = value;
    }
    static new(opts) {
      let t0, t0$;
      let position = opts && 'position' in opts ? opts.position : null;
      let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
      let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
      let horizontalFirst = opts && 'horizontalFirst' in opts ? opts.horizontalFirst : null;
      let desiredMaxRows = opts && 'desiredMaxRows' in opts ? opts.desiredMaxRows : null;
      let desiredMaxColumns = opts && 'desiredMaxColumns' in opts ? opts.desiredMaxColumns : null;
      let cellPadding = opts && 'cellPadding' in opts ? opts.cellPadding : null;
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
      let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
      let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
      let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
      position == null ? position = datum_legend$.DatumLegend.defaultBehaviorPosition : null;
      outsideJustification == null ? outsideJustification = datum_legend$.DatumLegend.defaultOutsideJustification : null;
      insideJustification == null ? insideJustification = datum_legend$.DatumLegend.defaultInsideJustification : null;
      cellPadding == null ? cellPadding = datum_legend$.DatumLegend.defaultCellPadding : null;
      horizontalFirst == null ? horizontalFirst = dart.equals(position, chart_behavior.BehaviorPosition.top) || dart.equals(position, chart_behavior.BehaviorPosition.bottom) || dart.equals(position, chart_behavior.BehaviorPosition.inside) : null;
      let layoutBuilder = dart.test(horizontalFirst) ? legend_layout.TabularLegendLayout.horizontalFirst({desiredMaxColumns: desiredMaxColumns, cellPadding: cellPadding}) : legend_layout.TabularLegendLayout.verticalFirst({desiredMaxRows: desiredMaxRows, cellPadding: cellPadding});
      return new datum_legend$.DatumLegend._internal({contentBuilder: new legend_content_builder.TabularLegendContentBuilder.new({legendLayout: layoutBuilder}), selectionModelType: selection_model.SelectionModelType.info, position: position, outsideJustification: outsideJustification, insideJustification: insideJustification, showMeasures: (t0 = showMeasures, t0 == null ? false : t0), legendDefaultMeasure: (t0$ = legendDefaultMeasure, t0$ == null ? legend_entry_generator.LegendDefaultMeasure.none : t0$), measureFormatter: measureFormatter, secondaryMeasureFormatter: secondaryMeasureFormatter, entryTextStyle: entryTextStyle});
    }
    static customLayout(contentBuilder, opts) {
      let t0, t0$;
      let position = opts && 'position' in opts ? opts.position : null;
      let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
      let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
      let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
      let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
      let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
      let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
      let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
      position == null ? position = datum_legend$.DatumLegend.defaultBehaviorPosition : null;
      outsideJustification == null ? outsideJustification = datum_legend$.DatumLegend.defaultOutsideJustification : null;
      insideJustification == null ? insideJustification = datum_legend$.DatumLegend.defaultInsideJustification : null;
      return new datum_legend$.DatumLegend._internal({contentBuilder: contentBuilder, selectionModelType: selection_model.SelectionModelType.info, position: position, outsideJustification: outsideJustification, insideJustification: insideJustification, showMeasures: (t0 = showMeasures, t0 == null ? false : t0), legendDefaultMeasure: (t0$ = legendDefaultMeasure, t0$ == null ? legend_entry_generator.LegendDefaultMeasure.none : t0$), measureFormatter: measureFormatter, secondaryMeasureFormatter: secondaryMeasureFormatter, entryTextStyle: entryTextStyle});
    }
    createCommonBehavior(D) {
      return new (datum_legend$._FlutterDatumLegend$(D)).new(this);
    }
    updateCommonBehavior(commonBehavior) {
      datum_legend.DatumLegend._check(commonBehavior);
      datum_legend$._FlutterDatumLegend.as(commonBehavior).config = this;
    }
    get role() {
      return "legend";
    }
    _equals(o) {
      if (o == null) return false;
      return datum_legend$.DatumLegend.is(o) && dart.equals(this.selectionModelType, o.selectionModelType) && dart.equals(this.contentBuilder, o.contentBuilder) && dart.equals(this.position, o.position) && dart.equals(this.outsideJustification, o.outsideJustification) && dart.equals(this.insideJustification, o.insideJustification) && dart.equals(this.showMeasures, o.showMeasures) && dart.equals(this.legendDefaultMeasure, o.legendDefaultMeasure) && dart.equals(this.measureFormatter, o.measureFormatter) && dart.equals(this.secondaryMeasureFormatter, o.secondaryMeasureFormatter) && dart.equals(this.entryTextStyle, o.entryTextStyle);
    }
    get hashCode() {
      return ui.hashValues(this.selectionModelType, this.contentBuilder, this.position, this.outsideJustification, this.insideJustification, this.showMeasures, this.legendDefaultMeasure, this.measureFormatter, this.secondaryMeasureFormatter, this.entryTextStyle);
    }
  };
  (datum_legend$.DatumLegend._internal = function(opts) {
    let contentBuilder = opts && 'contentBuilder' in opts ? opts.contentBuilder : null;
    let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let outsideJustification = opts && 'outsideJustification' in opts ? opts.outsideJustification : null;
    let insideJustification = opts && 'insideJustification' in opts ? opts.insideJustification : null;
    let showMeasures = opts && 'showMeasures' in opts ? opts.showMeasures : null;
    let legendDefaultMeasure = opts && 'legendDefaultMeasure' in opts ? opts.legendDefaultMeasure : null;
    let measureFormatter = opts && 'measureFormatter' in opts ? opts.measureFormatter : null;
    let secondaryMeasureFormatter = opts && 'secondaryMeasureFormatter' in opts ? opts.secondaryMeasureFormatter : null;
    let entryTextStyle = opts && 'entryTextStyle' in opts ? opts.entryTextStyle : null;
    this[desiredGestures$5] = new (_HashSetOfGestureType()).new();
    this[contentBuilder$0] = contentBuilder;
    this[selectionModelType$3] = selectionModelType;
    this[position$0] = position;
    this[outsideJustification$0] = outsideJustification;
    this[insideJustification$0] = insideJustification;
    this[showMeasures$0] = showMeasures;
    this[legendDefaultMeasure$0] = legendDefaultMeasure;
    this[measureFormatter$0] = measureFormatter;
    this[secondaryMeasureFormatter$0] = secondaryMeasureFormatter;
    this[entryTextStyle$0] = entryTextStyle;
    ;
  }).prototype = datum_legend$.DatumLegend.prototype;
  dart.addTypeTests(datum_legend$.DatumLegend);
  dart.setMethodSignature(datum_legend$.DatumLegend, () => ({
    __proto__: dart.getMethods(datum_legend$.DatumLegend.__proto__),
    createCommonBehavior: dart.gFnType(D => [datum_legend.DatumLegend$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(datum_legend$.DatumLegend, () => ({
    __proto__: dart.getGetters(datum_legend$.DatumLegend.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(datum_legend$.DatumLegend, "package:charts_flutter/src/behaviors/legend/datum_legend.dart");
  dart.setFieldSignature(datum_legend$.DatumLegend, () => ({
    __proto__: dart.getFields(datum_legend$.DatumLegend.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType),
    contentBuilder: dart.finalFieldType(legend_content_builder.LegendContentBuilder),
    position: dart.finalFieldType(chart_behavior.BehaviorPosition),
    outsideJustification: dart.finalFieldType(chart_behavior.OutsideJustification),
    insideJustification: dart.finalFieldType(chart_behavior.InsideJustification),
    showMeasures: dart.finalFieldType(core.bool),
    legendDefaultMeasure: dart.finalFieldType(legend_entry_generator.LegendDefaultMeasure),
    measureFormatter: dart.finalFieldType(dart.fnType(core.String, [core.num])),
    secondaryMeasureFormatter: dart.finalFieldType(dart.fnType(core.String, [core.num])),
    entryTextStyle: dart.finalFieldType(axis_spec.TextStyleSpec)
  }));
  dart.defineExtensionMethods(datum_legend$.DatumLegend, ['_equals']);
  dart.defineExtensionAccessors(datum_legend$.DatumLegend, ['hashCode']);
  dart.defineLazy(datum_legend$.DatumLegend, {
    /*datum_legend$.DatumLegend.defaultBehaviorPosition*/get defaultBehaviorPosition() {
      return C108 || CT.C108;
    },
    /*datum_legend$.DatumLegend.defaultOutsideJustification*/get defaultOutsideJustification() {
      return C27 || CT.C27;
    },
    /*datum_legend$.DatumLegend.defaultInsideJustification*/get defaultInsideJustification() {
      return C33 || CT.C33;
    },
    /*datum_legend$.DatumLegend.defaultCellPadding*/get defaultCellPadding() {
      return C72 || CT.C72;
    }
  });
  const _is__FlutterDatumLegend_default = Symbol('_is__FlutterDatumLegend_default');
  datum_legend$._FlutterDatumLegend$ = dart.generic(D => {
    let LegendEntryOfD = () => (LegendEntryOfD = dart.constFn(legend_entry.LegendEntry$(D)))();
    let LegendEntryOfDTobool = () => (LegendEntryOfDTobool = dart.constFn(dart.fnType(core.bool, [LegendEntryOfD()])))();
    const entryTextStyle = Symbol("entryTextStyle");
    class _FlutterDatumLegend extends datum_legend.DatumLegend$(D) {
      updateLegend() {
        chart_container.ChartContainerRenderObject.as(this.chartContext).requestRebuild();
      }
      get position() {
        return this.config.position;
      }
      get outsideJustification() {
        return this.config.outsideJustification;
      }
      set outsideJustification(value) {
        super.outsideJustification = value;
      }
      get insideJustification() {
        return this.config.insideJustification;
      }
      set insideJustification(value) {
        super.insideJustification = value;
      }
      build(context) {
        let hasSelection = this.legendState.legendEntries[$any](dart.fn(entry => entry.isSelected, LegendEntryOfDTobool()));
        let showMeasures = dart.test(this.config.showMeasures) && (dart.test(hasSelection) || !dart.equals(this.legendDefaultMeasure, legend_entry_generator.LegendDefaultMeasure.none));
        return this.config.contentBuilder.build(context, this.legendState, this, {showMeasures: showMeasures});
      }
      onLegendEntryTapUp(detail) {
      }
      set [entryTextStyle](x) {
        super.entryTextStyle = x;
      }
    }
    (_FlutterDatumLegend.new = function(config) {
      this.config = config;
      _FlutterDatumLegend.__proto__.new.call(this, {selectionModelType: config.selectionModelType, measureFormatter: config.measureFormatter, secondaryMeasureFormatter: config.secondaryMeasureFormatter, legendDefaultMeasure: config.legendDefaultMeasure});
      this[entryTextStyle] = this.config.entryTextStyle;
    }).prototype = _FlutterDatumLegend.prototype;
    dart.addTypeTests(_FlutterDatumLegend);
    _FlutterDatumLegend.prototype[_is__FlutterDatumLegend_default] = true;
    _FlutterDatumLegend[dart.implements] = () => [chart_behavior$.BuildableBehavior$(chart_behavior.ChartBehavior), legend$.TappableLegend];
    dart.setMethodSignature(_FlutterDatumLegend, () => ({
      __proto__: dart.getMethods(_FlutterDatumLegend.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      onLegendEntryTapUp: dart.fnType(dart.dynamic, [legend_entry.LegendEntry])
    }));
    dart.setGetterSignature(_FlutterDatumLegend, () => ({
      __proto__: dart.getGetters(_FlutterDatumLegend.__proto__),
      position: chart_behavior.BehaviorPosition
    }));
    dart.setLibraryUri(_FlutterDatumLegend, "package:charts_flutter/src/behaviors/legend/datum_legend.dart");
    dart.setFieldSignature(_FlutterDatumLegend, () => ({
      __proto__: dart.getFields(_FlutterDatumLegend.__proto__),
      config: dart.fieldType(datum_legend$.DatumLegend)
    }));
    return _FlutterDatumLegend;
  });
  datum_legend$._FlutterDatumLegend = datum_legend$._FlutterDatumLegend$();
  dart.addTypeTests(datum_legend$._FlutterDatumLegend, _is__FlutterDatumLegend_default);
  const desiredGestures$6 = dart.privateName(chart_title$, "ChartTitle.desiredGestures");
  const behaviorPosition$ = dart.privateName(chart_title$, "ChartTitle.behaviorPosition");
  const layoutMinSize$ = dart.privateName(chart_title$, "ChartTitle.layoutMinSize");
  const layoutPreferredSize$ = dart.privateName(chart_title$, "ChartTitle.layoutPreferredSize");
  const maxWidthStrategy$ = dart.privateName(chart_title$, "ChartTitle.maxWidthStrategy");
  const title$ = dart.privateName(chart_title$, "ChartTitle.title");
  const titleDirection$ = dart.privateName(chart_title$, "ChartTitle.titleDirection");
  const titleOutsideJustification$ = dart.privateName(chart_title$, "ChartTitle.titleOutsideJustification");
  const titlePadding$ = dart.privateName(chart_title$, "ChartTitle.titlePadding");
  const titleStyleSpec$ = dart.privateName(chart_title$, "ChartTitle.titleStyleSpec");
  const subTitle$ = dart.privateName(chart_title$, "ChartTitle.subTitle");
  const subTitleStyleSpec$ = dart.privateName(chart_title$, "ChartTitle.subTitleStyleSpec");
  const innerPadding$ = dart.privateName(chart_title$, "ChartTitle.innerPadding");
  const outerPadding$ = dart.privateName(chart_title$, "ChartTitle.outerPadding");
  chart_title$.ChartTitle = class ChartTitle extends chart_behavior$.ChartBehavior$(chart_title.ChartTitle) {
    get desiredGestures() {
      return this[desiredGestures$6];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get behaviorPosition() {
      return this[behaviorPosition$];
    }
    set behaviorPosition(value) {
      super.behaviorPosition = value;
    }
    get layoutMinSize() {
      return this[layoutMinSize$];
    }
    set layoutMinSize(value) {
      super.layoutMinSize = value;
    }
    get layoutPreferredSize() {
      return this[layoutPreferredSize$];
    }
    set layoutPreferredSize(value) {
      super.layoutPreferredSize = value;
    }
    get maxWidthStrategy() {
      return this[maxWidthStrategy$];
    }
    set maxWidthStrategy(value) {
      super.maxWidthStrategy = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get titleDirection() {
      return this[titleDirection$];
    }
    set titleDirection(value) {
      super.titleDirection = value;
    }
    get titleOutsideJustification() {
      return this[titleOutsideJustification$];
    }
    set titleOutsideJustification(value) {
      super.titleOutsideJustification = value;
    }
    get titlePadding() {
      return this[titlePadding$];
    }
    set titlePadding(value) {
      super.titlePadding = value;
    }
    get titleStyleSpec() {
      return this[titleStyleSpec$];
    }
    set titleStyleSpec(value) {
      super.titleStyleSpec = value;
    }
    get subTitle() {
      return this[subTitle$];
    }
    set subTitle(value) {
      super.subTitle = value;
    }
    get subTitleStyleSpec() {
      return this[subTitleStyleSpec$];
    }
    set subTitleStyleSpec(value) {
      super.subTitleStyleSpec = value;
    }
    get innerPadding() {
      return this[innerPadding$];
    }
    set innerPadding(value) {
      super.innerPadding = value;
    }
    get outerPadding() {
      return this[outerPadding$];
    }
    set outerPadding(value) {
      super.outerPadding = value;
    }
    createCommonBehavior(D) {
      return new (chart_title.ChartTitle$(D)).new(this.title, {behaviorPosition: this.behaviorPosition, innerPadding: this.innerPadding, layoutMinSize: this.layoutMinSize, layoutPreferredSize: this.layoutPreferredSize, outerPadding: this.outerPadding, maxWidthStrategy: this.maxWidthStrategy, titleDirection: this.titleDirection, titleOutsideJustification: this.titleOutsideJustification, titlePadding: this.titlePadding, titleStyleSpec: this.titleStyleSpec, subTitle: this.subTitle, subTitleStyleSpec: this.subTitleStyleSpec});
    }
    updateCommonBehavior(commonBehavior) {
      chart_title.ChartTitle._check(commonBehavior);
    }
    get role() {
      return "ChartTitle-" + dart.str(dart.toString(this.behaviorPosition));
    }
    _equals(o) {
      if (o == null) return false;
      return chart_title$.ChartTitle.is(o) && dart.equals(this.behaviorPosition, o.behaviorPosition) && this.layoutMinSize == o.layoutMinSize && this.layoutPreferredSize == o.layoutPreferredSize && dart.equals(this.maxWidthStrategy, o.maxWidthStrategy) && this.title == o.title && dart.equals(this.titleDirection, o.titleDirection) && dart.equals(this.titleOutsideJustification, o.titleOutsideJustification) && dart.equals(this.titleStyleSpec, o.titleStyleSpec) && this.subTitle == o.subTitle && dart.equals(this.subTitleStyleSpec, o.subTitleStyleSpec) && this.innerPadding == o.innerPadding && this.titlePadding == o.titlePadding && this.outerPadding == o.outerPadding;
    }
    get hashCode() {
      return ui.hashValues(this.behaviorPosition, this.layoutMinSize, this.layoutPreferredSize, this.maxWidthStrategy, this.title, this.titleDirection, this.titleOutsideJustification, this.titleStyleSpec, this.subTitle, this.subTitleStyleSpec, this.innerPadding, this.titlePadding, this.outerPadding);
    }
  };
  (chart_title$.ChartTitle.new = function(title, opts) {
    let behaviorPosition = opts && 'behaviorPosition' in opts ? opts.behaviorPosition : null;
    let innerPadding = opts && 'innerPadding' in opts ? opts.innerPadding : null;
    let layoutMinSize = opts && 'layoutMinSize' in opts ? opts.layoutMinSize : null;
    let layoutPreferredSize = opts && 'layoutPreferredSize' in opts ? opts.layoutPreferredSize : null;
    let outerPadding = opts && 'outerPadding' in opts ? opts.outerPadding : null;
    let maxWidthStrategy = opts && 'maxWidthStrategy' in opts ? opts.maxWidthStrategy : null;
    let titleDirection = opts && 'titleDirection' in opts ? opts.titleDirection : null;
    let titleOutsideJustification = opts && 'titleOutsideJustification' in opts ? opts.titleOutsideJustification : null;
    let titlePadding = opts && 'titlePadding' in opts ? opts.titlePadding : null;
    let titleStyleSpec = opts && 'titleStyleSpec' in opts ? opts.titleStyleSpec : null;
    let subTitle = opts && 'subTitle' in opts ? opts.subTitle : null;
    let subTitleStyleSpec = opts && 'subTitleStyleSpec' in opts ? opts.subTitleStyleSpec : null;
    this[desiredGestures$6] = new (_HashSetOfGestureType()).new();
    this[title$] = title;
    this[behaviorPosition$] = behaviorPosition;
    this[innerPadding$] = innerPadding;
    this[layoutMinSize$] = layoutMinSize;
    this[layoutPreferredSize$] = layoutPreferredSize;
    this[outerPadding$] = outerPadding;
    this[maxWidthStrategy$] = maxWidthStrategy;
    this[titleDirection$] = titleDirection;
    this[titleOutsideJustification$] = titleOutsideJustification;
    this[titlePadding$] = titlePadding;
    this[titleStyleSpec$] = titleStyleSpec;
    this[subTitle$] = subTitle;
    this[subTitleStyleSpec$] = subTitleStyleSpec;
    ;
  }).prototype = chart_title$.ChartTitle.prototype;
  dart.addTypeTests(chart_title$.ChartTitle);
  dart.setMethodSignature(chart_title$.ChartTitle, () => ({
    __proto__: dart.getMethods(chart_title$.ChartTitle.__proto__),
    createCommonBehavior: dart.gFnType(D => [chart_title.ChartTitle$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(chart_title$.ChartTitle, () => ({
    __proto__: dart.getGetters(chart_title$.ChartTitle.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(chart_title$.ChartTitle, "package:charts_flutter/src/behaviors/chart_title/chart_title.dart");
  dart.setFieldSignature(chart_title$.ChartTitle, () => ({
    __proto__: dart.getFields(chart_title$.ChartTitle.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    behaviorPosition: dart.finalFieldType(chart_behavior.BehaviorPosition),
    layoutMinSize: dart.finalFieldType(core.int),
    layoutPreferredSize: dart.finalFieldType(core.int),
    maxWidthStrategy: dart.finalFieldType(text_element.MaxWidthStrategy),
    title: dart.finalFieldType(core.String),
    titleDirection: dart.finalFieldType(chart_title.ChartTitleDirection),
    titleOutsideJustification: dart.finalFieldType(chart_behavior.OutsideJustification),
    titlePadding: dart.finalFieldType(core.int),
    titleStyleSpec: dart.finalFieldType(axis_spec.TextStyleSpec),
    subTitle: dart.finalFieldType(core.String),
    subTitleStyleSpec: dart.finalFieldType(axis_spec.TextStyleSpec),
    innerPadding: dart.finalFieldType(core.int),
    outerPadding: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(chart_title$.ChartTitle, ['_equals']);
  dart.defineExtensionAccessors(chart_title$.ChartTitle, ['hashCode']);
  const desiredGestures$7 = dart.privateName(percent_injector$, "PercentInjector.desiredGestures");
  const totalType$ = dart.privateName(percent_injector$, "PercentInjector.totalType");
  percent_injector$.PercentInjector = class PercentInjector extends chart_behavior$.ChartBehavior$(percent_injector.PercentInjector) {
    get desiredGestures() {
      return this[desiredGestures$7];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get totalType() {
      return this[totalType$];
    }
    set totalType(value) {
      super.totalType = value;
    }
    static new(opts) {
      let totalType = opts && 'totalType' in opts ? opts.totalType : null;
      totalType == null ? totalType = percent_injector.PercentInjectorTotalType.domain : null;
      return new percent_injector$.PercentInjector._internal({totalType: totalType});
    }
    createCommonBehavior(D) {
      return new (percent_injector.PercentInjector$(D)).new({totalType: this.totalType});
    }
    updateCommonBehavior(commonBehavior) {
      percent_injector.PercentInjector._check(commonBehavior);
    }
    get role() {
      return "PercentInjector";
    }
    _equals(o) {
      if (o == null) return false;
      return percent_injector$.PercentInjector.is(o) && dart.equals(this.totalType, o.totalType);
    }
    get hashCode() {
      return dart.hashCode(this.totalType);
    }
  };
  (percent_injector$.PercentInjector._internal = function(opts) {
    let totalType = opts && 'totalType' in opts ? opts.totalType : null;
    this[desiredGestures$7] = new (_HashSetOfGestureType()).new();
    this[totalType$] = totalType;
    ;
  }).prototype = percent_injector$.PercentInjector.prototype;
  dart.addTypeTests(percent_injector$.PercentInjector);
  dart.setMethodSignature(percent_injector$.PercentInjector, () => ({
    __proto__: dart.getMethods(percent_injector$.PercentInjector.__proto__),
    createCommonBehavior: dart.gFnType(D => [percent_injector.PercentInjector$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(percent_injector$.PercentInjector, () => ({
    __proto__: dart.getGetters(percent_injector$.PercentInjector.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(percent_injector$.PercentInjector, "package:charts_flutter/src/behaviors/calculation/percent_injector.dart");
  dart.setFieldSignature(percent_injector$.PercentInjector, () => ({
    __proto__: dart.getFields(percent_injector$.PercentInjector.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    totalType: dart.finalFieldType(percent_injector.PercentInjectorTotalType)
  }));
  dart.defineExtensionMethods(percent_injector$.PercentInjector, ['_equals']);
  dart.defineExtensionAccessors(percent_injector$.PercentInjector, ['hashCode']);
  const desiredGestures$8 = dart.privateName(initial_selection$, "InitialSelection.desiredGestures");
  const selectionModelType$4 = dart.privateName(initial_selection$, "InitialSelection.selectionModelType");
  const selectedSeriesConfig$0 = dart.privateName(initial_selection$, "InitialSelection.selectedSeriesConfig");
  const selectedDataConfig$0 = dart.privateName(initial_selection$, "InitialSelection.selectedDataConfig");
  initial_selection$.InitialSelection = class InitialSelection extends chart_behavior$.ChartBehavior$(initial_selection.InitialSelection) {
    get desiredGestures() {
      return this[desiredGestures$8];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$4];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    get selectedSeriesConfig() {
      return this[selectedSeriesConfig$0];
    }
    set selectedSeriesConfig(value) {
      super.selectedSeriesConfig = value;
    }
    get selectedDataConfig() {
      return this[selectedDataConfig$0];
    }
    set selectedDataConfig(value) {
      super.selectedDataConfig = value;
    }
    createCommonBehavior(D) {
      return new (initial_selection.InitialSelection$(D)).new({selectionModelType: this.selectionModelType, selectedDataConfig: this.selectedDataConfig, selectedSeriesConfig: this.selectedSeriesConfig});
    }
    updateCommonBehavior(commonBehavior) {
      initial_selection.InitialSelection._check(commonBehavior);
    }
    get role() {
      return "InitialSelection-" + dart.str(dart.toString(this.selectionModelType));
    }
    _equals(o) {
      if (o == null) return false;
      return initial_selection$.InitialSelection.is(o) && dart.equals(this.selectionModelType, o.selectionModelType) && dart.test(new equality.ListEquality.new().equals(this.selectedSeriesConfig, o.selectedSeriesConfig)) && dart.test(new equality.ListEquality.new().equals(this.selectedDataConfig, o.selectedDataConfig));
    }
    get hashCode() {
      let t0, t0$, t0$0, t0$1;
      let hashcode = dart.hashCode(this.selectionModelType);
      hashcode = dart.notNull(hashcode) * 37 + dart.notNull((t0$ = (t0 = this.selectedSeriesConfig, t0 == null ? null : dart.hashCode(t0)), t0$ == null ? 0 : t0$));
      hashcode = dart.notNull(hashcode) * 37 + dart.notNull((t0$1 = (t0$0 = this.selectedDataConfig, t0$0 == null ? null : dart.hashCode(t0$0)), t0$1 == null ? 0 : t0$1));
      return hashcode;
    }
  };
  (initial_selection$.InitialSelection.new = function(opts) {
    let selectionModelType = opts && 'selectionModelType' in opts ? opts.selectionModelType : C1 || CT.C1;
    let selectedSeriesConfig = opts && 'selectedSeriesConfig' in opts ? opts.selectedSeriesConfig : null;
    let selectedDataConfig = opts && 'selectedDataConfig' in opts ? opts.selectedDataConfig : null;
    this[desiredGestures$8] = new (_HashSetOfGestureType()).new();
    this[selectionModelType$4] = selectionModelType;
    this[selectedSeriesConfig$0] = selectedSeriesConfig;
    this[selectedDataConfig$0] = selectedDataConfig;
    ;
  }).prototype = initial_selection$.InitialSelection.prototype;
  dart.addTypeTests(initial_selection$.InitialSelection);
  dart.setMethodSignature(initial_selection$.InitialSelection, () => ({
    __proto__: dart.getMethods(initial_selection$.InitialSelection.__proto__),
    createCommonBehavior: dart.gFnType(D => [initial_selection.InitialSelection$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(initial_selection$.InitialSelection, () => ({
    __proto__: dart.getGetters(initial_selection$.InitialSelection.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(initial_selection$.InitialSelection, "package:charts_flutter/src/behaviors/initial_selection.dart");
  dart.setFieldSignature(initial_selection$.InitialSelection, () => ({
    __proto__: dart.getFields(initial_selection$.InitialSelection.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType),
    selectedSeriesConfig: dart.finalFieldType(core.List$(core.String)),
    selectedDataConfig: dart.finalFieldType(core.List$(series_datum.SeriesDatumConfig))
  }));
  dart.defineExtensionMethods(initial_selection$.InitialSelection, ['_equals']);
  dart.defineExtensionAccessors(initial_selection$.InitialSelection, ['hashCode']);
  const desiredGestures$9 = dart.privateName(domain_highlighter$, "DomainHighlighter.desiredGestures");
  const selectionModelType$5 = dart.privateName(domain_highlighter$, "DomainHighlighter.selectionModelType");
  domain_highlighter$.DomainHighlighter = class DomainHighlighter extends chart_behavior$.ChartBehavior$(domain_highlighter.DomainHighlighter) {
    get desiredGestures() {
      return this[desiredGestures$9];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get selectionModelType() {
      return this[selectionModelType$5];
    }
    set selectionModelType(value) {
      super.selectionModelType = value;
    }
    createCommonBehavior(D) {
      return new (domain_highlighter.DomainHighlighter$(D)).new(this.selectionModelType);
    }
    updateCommonBehavior(commonBehavior) {
      domain_highlighter.DomainHighlighter._check(commonBehavior);
    }
    get role() {
      return "domainHighlight-" + dart.str(dart.toString(this.selectionModelType));
    }
    _equals(o) {
      if (o == null) return false;
      return domain_highlighter$.DomainHighlighter.is(o) && dart.equals(this.selectionModelType, o.selectionModelType);
    }
    get hashCode() {
      return dart.hashCode(this.selectionModelType);
    }
  };
  (domain_highlighter$.DomainHighlighter.new = function(selectionModelType) {
    if (selectionModelType === void 0) selectionModelType = C1 || CT.C1;
    this[desiredGestures$9] = new (_HashSetOfGestureType()).new();
    this[selectionModelType$5] = selectionModelType;
    ;
  }).prototype = domain_highlighter$.DomainHighlighter.prototype;
  dart.addTypeTests(domain_highlighter$.DomainHighlighter);
  dart.setMethodSignature(domain_highlighter$.DomainHighlighter, () => ({
    __proto__: dart.getMethods(domain_highlighter$.DomainHighlighter.__proto__),
    createCommonBehavior: dart.gFnType(D => [domain_highlighter.DomainHighlighter$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(domain_highlighter$.DomainHighlighter, () => ({
    __proto__: dart.getGetters(domain_highlighter$.DomainHighlighter.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(domain_highlighter$.DomainHighlighter, "package:charts_flutter/src/behaviors/domain_highlighter.dart");
  dart.setFieldSignature(domain_highlighter$.DomainHighlighter, () => ({
    __proto__: dart.getFields(domain_highlighter$.DomainHighlighter.__proto__),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    selectionModelType: dart.finalFieldType(selection_model.SelectionModelType)
  }));
  dart.defineExtensionMethods(domain_highlighter$.DomainHighlighter, ['_equals']);
  dart.defineExtensionAccessors(domain_highlighter$.DomainHighlighter, ['hashCode']);
  const _name$6 = dart.privateName(a11y_explore_behavior, "_name");
  let C111;
  let C112;
  const vocalizationCallback$ = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.vocalizationCallback");
  const desiredGestures$10 = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.desiredGestures");
  const exploreModeTrigger$ = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.exploreModeTrigger");
  const minimumWidth$ = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.minimumWidth");
  const exploreModeEnabledAnnouncement$ = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.exploreModeEnabledAnnouncement");
  const exploreModeDisabledAnnouncement$ = dart.privateName(domain_a11y_explore_behavior$, "DomainA11yExploreBehavior.exploreModeDisabledAnnouncement");
  domain_a11y_explore_behavior$.DomainA11yExploreBehavior = class DomainA11yExploreBehavior extends chart_behavior$.ChartBehavior$(domain_a11y_explore_behavior.DomainA11yExploreBehavior) {
    get vocalizationCallback() {
      return this[vocalizationCallback$];
    }
    set vocalizationCallback(value) {
      super.vocalizationCallback = value;
    }
    get desiredGestures() {
      return this[desiredGestures$10];
    }
    set desiredGestures(value) {
      super.desiredGestures = value;
    }
    get exploreModeTrigger() {
      return this[exploreModeTrigger$];
    }
    set exploreModeTrigger(value) {
      super.exploreModeTrigger = value;
    }
    get minimumWidth() {
      return this[minimumWidth$];
    }
    set minimumWidth(value) {
      super.minimumWidth = value;
    }
    get exploreModeEnabledAnnouncement() {
      return this[exploreModeEnabledAnnouncement$];
    }
    set exploreModeEnabledAnnouncement(value) {
      super.exploreModeEnabledAnnouncement = value;
    }
    get exploreModeDisabledAnnouncement() {
      return this[exploreModeDisabledAnnouncement$];
    }
    set exploreModeDisabledAnnouncement(value) {
      super.exploreModeDisabledAnnouncement = value;
    }
    static new(opts) {
      let t0, t0$;
      let vocalizationCallback = opts && 'vocalizationCallback' in opts ? opts.vocalizationCallback : null;
      let exploreModeTrigger = opts && 'exploreModeTrigger' in opts ? opts.exploreModeTrigger : null;
      let minimumWidth = opts && 'minimumWidth' in opts ? opts.minimumWidth : null;
      let exploreModeEnabledAnnouncement = opts && 'exploreModeEnabledAnnouncement' in opts ? opts.exploreModeEnabledAnnouncement : null;
      let exploreModeDisabledAnnouncement = opts && 'exploreModeDisabledAnnouncement' in opts ? opts.exploreModeDisabledAnnouncement : null;
      let desiredGestures = new (_HashSetOfGestureType()).new();
      exploreModeTrigger == null ? exploreModeTrigger = a11y_explore_behavior.ExploreModeTrigger.pressHold : null;
      switch (exploreModeTrigger) {
        case C111 || CT.C111:
        {
          t0 = desiredGestures;
          t0.add(chart_behavior$.GestureType.onLongPress);
          t0;
          break;
        }
        case C112 || CT.C112:
        {
          t0$ = desiredGestures;
          t0$.add(chart_behavior$.GestureType.onTap);
          t0$;
          break;
        }
      }
      return new domain_a11y_explore_behavior$.DomainA11yExploreBehavior._internal({vocalizationCallback: vocalizationCallback, desiredGestures: desiredGestures, exploreModeTrigger: exploreModeTrigger, minimumWidth: minimumWidth, exploreModeEnabledAnnouncement: exploreModeEnabledAnnouncement, exploreModeDisabledAnnouncement: exploreModeDisabledAnnouncement});
    }
    createCommonBehavior(D) {
      return new (domain_a11y_explore_behavior.DomainA11yExploreBehavior$(D)).new({vocalizationCallback: this.vocalizationCallback, exploreModeTrigger: this.exploreModeTrigger, minimumWidth: this.minimumWidth, exploreModeEnabledAnnouncement: this.exploreModeEnabledAnnouncement, exploreModeDisabledAnnouncement: this.exploreModeDisabledAnnouncement});
    }
    updateCommonBehavior(commonBehavior) {
      domain_a11y_explore_behavior.DomainA11yExploreBehavior._check(commonBehavior);
    }
    get role() {
      return "DomainA11yExplore-" + dart.str(this.exploreModeTrigger);
    }
    _equals(o) {
      if (o == null) return false;
      return domain_a11y_explore_behavior$.DomainA11yExploreBehavior.is(o) && dart.equals(this.vocalizationCallback, o.vocalizationCallback) && dart.equals(this.exploreModeTrigger, o.exploreModeTrigger) && this.minimumWidth == o.minimumWidth && this.exploreModeEnabledAnnouncement == o.exploreModeEnabledAnnouncement && this.exploreModeDisabledAnnouncement == o.exploreModeDisabledAnnouncement;
    }
    get hashCode() {
      return ui.hashValues(this.minimumWidth, this.vocalizationCallback, this.exploreModeTrigger, this.exploreModeEnabledAnnouncement, this.exploreModeDisabledAnnouncement);
    }
  };
  (domain_a11y_explore_behavior$.DomainA11yExploreBehavior._internal = function(opts) {
    let vocalizationCallback = opts && 'vocalizationCallback' in opts ? opts.vocalizationCallback : null;
    let exploreModeTrigger = opts && 'exploreModeTrigger' in opts ? opts.exploreModeTrigger : null;
    let desiredGestures = opts && 'desiredGestures' in opts ? opts.desiredGestures : null;
    let minimumWidth = opts && 'minimumWidth' in opts ? opts.minimumWidth : null;
    let exploreModeEnabledAnnouncement = opts && 'exploreModeEnabledAnnouncement' in opts ? opts.exploreModeEnabledAnnouncement : null;
    let exploreModeDisabledAnnouncement = opts && 'exploreModeDisabledAnnouncement' in opts ? opts.exploreModeDisabledAnnouncement : null;
    this[vocalizationCallback$] = vocalizationCallback;
    this[exploreModeTrigger$] = exploreModeTrigger;
    this[desiredGestures$10] = desiredGestures;
    this[minimumWidth$] = minimumWidth;
    this[exploreModeEnabledAnnouncement$] = exploreModeEnabledAnnouncement;
    this[exploreModeDisabledAnnouncement$] = exploreModeDisabledAnnouncement;
    ;
  }).prototype = domain_a11y_explore_behavior$.DomainA11yExploreBehavior.prototype;
  dart.addTypeTests(domain_a11y_explore_behavior$.DomainA11yExploreBehavior);
  dart.setMethodSignature(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, () => ({
    __proto__: dart.getMethods(domain_a11y_explore_behavior$.DomainA11yExploreBehavior.__proto__),
    createCommonBehavior: dart.gFnType(D => [domain_a11y_explore_behavior.DomainA11yExploreBehavior$(D), []]),
    updateCommonBehavior: dart.fnType(dart.void, [core.Object]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, () => ({
    __proto__: dart.getGetters(domain_a11y_explore_behavior$.DomainA11yExploreBehavior.__proto__),
    role: core.String
  }));
  dart.setLibraryUri(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, "package:charts_flutter/src/behaviors/a11y/domain_a11y_explore_behavior.dart");
  dart.setFieldSignature(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, () => ({
    __proto__: dart.getFields(domain_a11y_explore_behavior$.DomainA11yExploreBehavior.__proto__),
    vocalizationCallback: dart.finalFieldType(dart.fnType(core.String, [core.List$(series_datum.SeriesDatum)])),
    desiredGestures: dart.finalFieldType(core.Set$(chart_behavior$.GestureType)),
    exploreModeTrigger: dart.finalFieldType(a11y_explore_behavior.ExploreModeTrigger),
    minimumWidth: dart.finalFieldType(core.double),
    exploreModeEnabledAnnouncement: dart.finalFieldType(core.String),
    exploreModeDisabledAnnouncement: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, ['_equals']);
  dart.defineExtensionAccessors(domain_a11y_explore_behavior$.DomainA11yExploreBehavior, ['hashCode']);
  const vertical$ = dart.privateName(bar_chart$, "BarChart.vertical");
  const barRendererDecorator$ = dart.privateName(bar_chart$, "BarChart.barRendererDecorator");
  bar_chart$.BarChart = class BarChart extends cartesian_chart$.CartesianChart$(core.String) {
    get vertical() {
      return this[vertical$];
    }
    set vertical(value) {
      super.vertical = value;
    }
    get barRendererDecorator() {
      return this[barRendererDecorator$];
    }
    set barRendererDecorator(value) {
      super.barRendererDecorator = value;
    }
    createCommonChart(chartState) {
      let t0, t0$, t0$0;
      base_chart_state.BaseChartState._check(chartState);
      return new bar_chart.BarChart.new({vertical: this.vertical, layoutConfig: (t0 = this.layoutConfig, t0 == null ? null : t0.commonLayoutConfig), primaryMeasureAxis: axis.NumericAxis._check((t0$ = this.primaryMeasureAxis, t0$ == null ? null : t0$.createAxis())), secondaryMeasureAxis: axis.NumericAxis._check((t0$0 = this.secondaryMeasureAxis, t0$0 == null ? null : t0$0.createAxis())), disjointMeasureAxes: this.createDisjointMeasureAxes()});
    }
    addDefaultInteractions(behaviors) {
      super.addDefaultInteractions(behaviors);
      behaviors[$add](new domain_highlighter$.DomainHighlighter.new());
    }
  };
  (bar_chart$.BarChart.new = function(seriesList, opts) {
    let t0;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let domainAxis = opts && 'domainAxis' in opts ? opts.domainAxis : null;
    let primaryMeasureAxis = opts && 'primaryMeasureAxis' in opts ? opts.primaryMeasureAxis : null;
    let secondaryMeasureAxis = opts && 'secondaryMeasureAxis' in opts ? opts.secondaryMeasureAxis : null;
    let disjointMeasureAxes = opts && 'disjointMeasureAxes' in opts ? opts.disjointMeasureAxes : null;
    let barGroupingType = opts && 'barGroupingType' in opts ? opts.barGroupingType : null;
    let defaultRenderer = opts && 'defaultRenderer' in opts ? opts.defaultRenderer : null;
    let customSeriesRenderers = opts && 'customSeriesRenderers' in opts ? opts.customSeriesRenderers : null;
    let behaviors = opts && 'behaviors' in opts ? opts.behaviors : null;
    let selectionModels = opts && 'selectionModels' in opts ? opts.selectionModels : null;
    let rtlSpec = opts && 'rtlSpec' in opts ? opts.rtlSpec : null;
    let vertical = opts && 'vertical' in opts ? opts.vertical : true;
    let defaultInteractions = opts && 'defaultInteractions' in opts ? opts.defaultInteractions : true;
    let layoutConfig = opts && 'layoutConfig' in opts ? opts.layoutConfig : null;
    let userManagedState = opts && 'userManagedState' in opts ? opts.userManagedState : null;
    let barRendererDecorator = opts && 'barRendererDecorator' in opts ? opts.barRendererDecorator : null;
    let flipVerticalAxis = opts && 'flipVerticalAxis' in opts ? opts.flipVerticalAxis : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[vertical$] = vertical;
    this[barRendererDecorator$] = barRendererDecorator;
    bar_chart$.BarChart.__proto__.new.call(this, seriesList, {animate: animate, animationDuration: animationDuration, domainAxis: domainAxis, primaryMeasureAxis: primaryMeasureAxis, secondaryMeasureAxis: secondaryMeasureAxis, disjointMeasureAxes: disjointMeasureAxes, defaultRenderer: (t0 = defaultRenderer, t0 == null ? new (BarRendererConfigOfString()).new({groupingType: barGroupingType, barRendererDecorator: barRendererDecorator}) : t0), customSeriesRenderers: customSeriesRenderers, behaviors: behaviors, selectionModels: selectionModels, rtlSpec: rtlSpec, defaultInteractions: defaultInteractions, layoutConfig: layoutConfig, userManagedState: userManagedState, flipVerticalAxis: flipVerticalAxis, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bar_chart$.BarChart.prototype;
  dart.addTypeTests(bar_chart$.BarChart);
  dart.setMethodSignature(bar_chart$.BarChart, () => ({
    __proto__: dart.getMethods(bar_chart$.BarChart.__proto__),
    createCommonChart: dart.fnType(bar_chart.BarChart, [core.Object])
  }));
  dart.setLibraryUri(bar_chart$.BarChart, "package:charts_flutter/src/bar_chart.dart");
  dart.setFieldSignature(bar_chart$.BarChart, () => ({
    __proto__: dart.getFields(bar_chart$.BarChart.__proto__),
    vertical: dart.finalFieldType(core.bool),
    barRendererDecorator: dart.finalFieldType(bar_renderer_decorator.BarRendererDecorator)
  }));
  dart.trackLibraries("packages/charts_flutter/flutter", {
    "package:charts_flutter/src/line_style.dart": line_style$,
    "package:charts_flutter/src/cartesian_chart.dart": cartesian_chart$,
    "package:charts_flutter/src/user_managed_state.dart": user_managed_state,
    "package:charts_flutter/src/selection_model_config.dart": selection_model_config,
    "package:charts_flutter/src/base_chart.dart": base_chart$,
    "package:charts_flutter/src/base_chart_state.dart": base_chart_state,
    "package:charts_flutter/src/widget_layout_delegate.dart": widget_layout_delegate,
    "package:charts_flutter/src/behaviors/chart_behavior.dart": chart_behavior$,
    "package:charts_flutter/src/chart_gesture_detector.dart": chart_gesture_detector,
    "package:charts_flutter/src/util.dart": util,
    "package:charts_flutter/src/chart_container.dart": chart_container,
    "package:charts_flutter/src/time_series_chart.dart": time_series_chart$,
    "package:charts_flutter/src/behaviors/line_point_highlighter.dart": line_point_highlighter$,
    "package:charts_flutter/src/graphics_factory.dart": graphics_factory$,
    "package:charts_flutter/src/text_style.dart": text_style$0,
    "package:charts_flutter/src/text_element.dart": text_element$,
    "package:charts_flutter/src/chart_state.dart": chart_state,
    "package:charts_flutter/src/chart_canvas.dart": chart_canvas$,
    "package:charts_flutter/src/canvas/polygon_painter.dart": polygon_painter,
    "package:charts_flutter/src/canvas/point_painter.dart": point_painter,
    "package:charts_flutter/src/canvas/pie_painter.dart": pie_painter,
    "package:charts_flutter/src/canvas/circle_sector_painter.dart": circle_sector_painter,
    "package:charts_flutter/src/canvas/line_painter.dart": line_painter,
    "package:charts_flutter/src/behaviors/select_nearest.dart": select_nearest$,
    "package:charts_flutter/src/behaviors/sliding_viewport.dart": sliding_viewport$,
    "package:charts_flutter/src/behaviors/legend/legend_content_builder.dart": legend_content_builder,
    "package:charts_flutter/src/behaviors/legend/legend_layout.dart": legend_layout,
    "package:charts_flutter/src/behaviors/legend/legend_entry_layout.dart": legend_entry_layout,
    "package:charts_flutter/src/behaviors/legend/legend.dart": legend$,
    "package:charts_flutter/src/symbol_renderer.dart": symbol_renderer$,
    "package:charts_flutter/src/util/color.dart": color$0,
    "package:charts_flutter/src/combo_chart/combo_chart.dart": combo_chart,
    "package:charts_flutter/flutter.dart": flutter,
    "package:charts_flutter/src/scatter_plot_chart.dart": scatter_plot_chart$,
    "package:charts_flutter/src/pie_chart.dart": pie_chart$,
    "package:charts_flutter/src/line_chart.dart": line_chart$,
    "package:charts_flutter/src/behaviors/zoom/pan_behavior.dart": pan_behavior$,
    "package:charts_flutter/src/behaviors/zoom/pan_and_zoom_behavior.dart": pan_and_zoom_behavior$,
    "package:charts_flutter/src/behaviors/zoom/initial_hint_behavior.dart": initial_hint_behavior$,
    "package:charts_flutter/src/behaviors/slider/slider.dart": slider$,
    "package:charts_flutter/src/behaviors/range_annotation.dart": range_annotation$,
    "package:charts_flutter/src/behaviors/legend/series_legend.dart": series_legend$,
    "package:charts_flutter/src/behaviors/legend/datum_legend.dart": datum_legend$,
    "package:charts_flutter/src/behaviors/chart_title/chart_title.dart": chart_title$,
    "package:charts_flutter/src/behaviors/calculation/percent_injector.dart": percent_injector$,
    "package:charts_flutter/src/behaviors/initial_selection.dart": initial_selection$,
    "package:charts_flutter/src/behaviors/domain_highlighter.dart": domain_highlighter$,
    "package:charts_flutter/src/behaviors/a11y/domain_a11y_explore_behavior.dart": domain_a11y_explore_behavior$,
    "package:charts_flutter/src/bar_chart.dart": bar_chart$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/line_style.dart","src/base_chart.dart","src/cartesian_chart.dart","src/user_managed_state.dart","src/selection_model_config.dart","src/base_chart_state.dart","src/widget_layout_delegate.dart","src/behaviors/chart_behavior.dart","src/chart_gesture_detector.dart","src/util.dart","src/chart_container.dart","src/time_series_chart.dart","src/behaviors/line_point_highlighter.dart","src/graphics_factory.dart","src/text_style.dart","src/text_element.dart","src/chart_state.dart","src/chart_canvas.dart","src/canvas/polygon_painter.dart","src/canvas/point_painter.dart","src/canvas/pie_painter.dart","src/canvas/circle_sector_painter.dart","src/canvas/line_painter.dart","src/behaviors/select_nearest.dart","src/behaviors/sliding_viewport.dart","src/behaviors/legend/legend_content_builder.dart","src/behaviors/legend/legend_layout.dart","src/behaviors/legend/legend_entry_layout.dart","src/behaviors/legend/legend.dart","src/symbol_renderer.dart","src/util/color.dart","src/combo_chart/combo_chart.dart","src/scatter_plot_chart.dart","src/pie_chart.dart","src/line_chart.dart","src/behaviors/zoom/pan_behavior.dart","src/behaviors/zoom/pan_and_zoom_behavior.dart","src/behaviors/zoom/initial_hint_behavior.dart","src/behaviors/slider/slider.dart","src/behaviors/range_annotation.dart","src/behaviors/legend/series_legend.dart","src/behaviors/legend/datum_legend.dart","src/behaviors/chart_title/chart_title.dart","src/behaviors/calculation/percent_injector.dart","src/behaviors/initial_selection.dart","src/behaviors/domain_highlighter.dart","src/behaviors/a11y/domain_a11y_explore_behavior.dart","src/bar_chart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBe;;;;;;IAEH;;;;;;IAEN;;;;;;;;IAJS;IAEH;IAEN;;EACN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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;QACI;QACO;QACA;QACA;QACiB;QACM;QACnB;QACY;QACjB;QACF;QACR;;AACF,8FACG,UAAU,aACD,OAAO,qBACG,iBAAiB,cACxB,UAAU,sBACF,kBAAkB,wBAChB,oBAAoB,mBACzB,eAAe,yBACT,qBAAqB,aACjC,SAAS,mBACH,eAAe,WACvB,OAAO,gBACF,YAAY,uBACL,mBAAmB;;EACzC;;;;;;;;sBAgDuD;;;AAI5D,YAAW,oGACO,OAAc,kHACR,OAAoB,oHAClB,OAAsB;IAClD;;gDAtCsB;QACf;QACI;QACO;QACA;QACA;QACoB;QACM;QACtB;QACe;QACpB;QACF;QACR;;AACF,iGACG,UAAU,aACD,OAAO,qBACG,iBAAiB,cACxB,UAAU,sBACF,kBAAkB,wBAChB,oBAAoB,mBACzB,eAAe,yBACT,qBAAqB,aACjC,SAAS,mBACH,eAAe,WACvB,OAAO,gBACF,YAAY,uBACL,mBAAmB;;EACzC;;;;;;;;sBCtCkD;;;AAIvD,YAAW,kGACO,OAAc,kHACR,OAAoB,oHAClB,OAAsB,0CACvB;IAC3B;;uDA7CsB;QACf;QACI;QACO;QACA;QACA;QAC8B;QACd;QACO;QACnB;QACY;QACjB;QACF;QACR;QACA;QACiB;;AACnB,qGACG,UAAU,aACD,OAAO,qBACG,iBAAiB,cACxB,UAAU,sBACF,kBAAkB,wBAChB,oBAAoB,uBACrB,mBAAmB,mBACvB,eAAe,yBACT,qBAAqB,aACjC,SAAS,mBACH,eAAe,WACvB,OAAO,gBACF,YAAY,uBACL,mBAAmB,oBACtB,gBAAgB,oBAChB,gBAAgB;;EACnC;;;;;;;;;;;;;wBCtB6C;;;AAChD,cAAI,8EAAiC,OAAc;MAAmB;6BAG1B;AACP,QAAjC,6BAAuB,SAAS;MACxC;;6BA5BsB;UACf;UACI;UACmB;UACR;UACU;UACf;UACF;UACR;;AACF,yEACG,UAAU,aACD,OAAO,qBACG,iBAAiB,mBACnB,eAAe,aACrB,SAAS,mBACH,eAAe,WACvB,OAAO,gBACF,YAAY,uBACL,mBAAmB;;IACzC;;;;;;;;;;;;;sBC6B2C;;;AAIhD,YAAW,mFAC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","file":"flutter.ddc.js"}');
  // Exports:
  return {
    src__line_style: line_style$,
    src__cartesian_chart: cartesian_chart$,
    src__user_managed_state: user_managed_state,
    src__selection_model_config: selection_model_config,
    src__base_chart: base_chart$,
    src__base_chart_state: base_chart_state,
    src__widget_layout_delegate: widget_layout_delegate,
    src__behaviors__chart_behavior: chart_behavior$,
    src__chart_gesture_detector: chart_gesture_detector,
    src__util: util,
    src__chart_container: chart_container,
    src__time_series_chart: time_series_chart$,
    src__behaviors__line_point_highlighter: line_point_highlighter$,
    src__graphics_factory: graphics_factory$,
    src__text_style: text_style$0,
    src__text_element: text_element$,
    src__chart_state: chart_state,
    src__chart_canvas: chart_canvas$,
    src__canvas__polygon_painter: polygon_painter,
    src__canvas__point_painter: point_painter,
    src__canvas__pie_painter: pie_painter,
    src__canvas__circle_sector_painter: circle_sector_painter,
    src__canvas__line_painter: line_painter,
    src__behaviors__select_nearest: select_nearest$,
    src__behaviors__sliding_viewport: sliding_viewport$,
    src__behaviors__legend__legend_content_builder: legend_content_builder,
    src__behaviors__legend__legend_layout: legend_layout,
    src__behaviors__legend__legend_entry_layout: legend_entry_layout,
    src__behaviors__legend__legend: legend$,
    src__symbol_renderer: symbol_renderer$,
    src__util__color: color$0,
    src__combo_chart__combo_chart: combo_chart,
    flutter: flutter,
    src__scatter_plot_chart: scatter_plot_chart$,
    src__pie_chart: pie_chart$,
    src__line_chart: line_chart$,
    src__behaviors__zoom__pan_behavior: pan_behavior$,
    src__behaviors__zoom__pan_and_zoom_behavior: pan_and_zoom_behavior$,
    src__behaviors__zoom__initial_hint_behavior: initial_hint_behavior$,
    src__behaviors__slider__slider: slider$,
    src__behaviors__range_annotation: range_annotation$,
    src__behaviors__legend__series_legend: series_legend$,
    src__behaviors__legend__datum_legend: datum_legend$,
    src__behaviors__chart_title__chart_title: chart_title$,
    src__behaviors__calculation__percent_injector: percent_injector$,
    src__behaviors__initial_selection: initial_selection$,
    src__behaviors__domain_highlighter: domain_highlighter$,
    src__behaviors__a11y__domain_a11y_explore_behavior: domain_a11y_explore_behavior$,
    src__bar_chart: bar_chart$
  };
});

//# sourceMappingURL=flutter.ddc.js.map
