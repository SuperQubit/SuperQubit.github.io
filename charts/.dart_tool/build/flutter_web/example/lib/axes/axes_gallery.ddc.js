define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/axes/bar_secondary_axis', 'packages/example/axes/bar_secondary_axis_only', 'packages/example/axes/horizontal_bar_secondary_axis', 'packages/example/axes/short_tick_length_axis', 'packages/example/axes/custom_font_size_and_color', 'packages/example/axes/measure_axis_label_alignment', 'packages/example/axes/hidden_ticks_and_labels_axis', 'packages/example/axes/statically_provided_ticks', 'packages/example/axes/custom_axis_tick_formatters', 'packages/example/axes/custom_measure_tick_count', 'packages/example/axes/integer_only_measure_axis', 'packages/example/axes/nonzero_bound_measure_axis', 'packages/example/axes/ordinal_initial_viewport', 'packages/example/axes/numeric_initial_viewport', 'packages/example/axes/gridline_dash_pattern', 'packages/example/axes/line_disjoint_axis'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__axes__bar_secondary_axis, packages__example__axes__bar_secondary_axis_only, packages__example__axes__horizontal_bar_secondary_axis, packages__example__axes__short_tick_length_axis, packages__example__axes__custom_font_size_and_color, packages__example__axes__measure_axis_label_alignment, packages__example__axes__hidden_ticks_and_labels_axis, packages__example__axes__statically_provided_ticks, packages__example__axes__custom_axis_tick_formatters, packages__example__axes__custom_measure_tick_count, packages__example__axes__integer_only_measure_axis, packages__example__axes__nonzero_bound_measure_axis, packages__example__axes__ordinal_initial_viewport, packages__example__axes__numeric_initial_viewport, packages__example__axes__gridline_dash_pattern, packages__example__axes__line_disjoint_axis) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icons = packages__flutter__material.src__material__icons;
  const bar_secondary_axis = packages__example__axes__bar_secondary_axis.axes__bar_secondary_axis;
  const bar_secondary_axis_only = packages__example__axes__bar_secondary_axis_only.axes__bar_secondary_axis_only;
  const horizontal_bar_secondary_axis = packages__example__axes__horizontal_bar_secondary_axis.axes__horizontal_bar_secondary_axis;
  const short_tick_length_axis = packages__example__axes__short_tick_length_axis.axes__short_tick_length_axis;
  const custom_font_size_and_color = packages__example__axes__custom_font_size_and_color.axes__custom_font_size_and_color;
  const measure_axis_label_alignment = packages__example__axes__measure_axis_label_alignment.axes__measure_axis_label_alignment;
  const hidden_ticks_and_labels_axis = packages__example__axes__hidden_ticks_and_labels_axis.axes__hidden_ticks_and_labels_axis;
  const statically_provided_ticks = packages__example__axes__statically_provided_ticks.axes__statically_provided_ticks;
  const custom_axis_tick_formatters = packages__example__axes__custom_axis_tick_formatters.axes__custom_axis_tick_formatters;
  const custom_measure_tick_count = packages__example__axes__custom_measure_tick_count.axes__custom_measure_tick_count;
  const integer_only_measure_axis = packages__example__axes__integer_only_measure_axis.axes__integer_only_measure_axis;
  const nonzero_bound_measure_axis = packages__example__axes__nonzero_bound_measure_axis.axes__nonzero_bound_measure_axis;
  const ordinal_initial_viewport = packages__example__axes__ordinal_initial_viewport.axes__ordinal_initial_viewport;
  const numeric_initial_viewport = packages__example__axes__numeric_initial_viewport.axes__numeric_initial_viewport;
  const gridline_dash_pattern = packages__example__axes__gridline_dash_pattern.axes__gridline_dash_pattern;
  const line_disjoint_axis = packages__example__axes__line_disjoint_axis.axes__line_disjoint_axis;
  const axes_gallery = Object.create(dart.library);
  let VoidToBarChartWithSecondaryAxis = () => (VoidToBarChartWithSecondaryAxis = dart.constFn(dart.fnType(bar_secondary_axis.BarChartWithSecondaryAxis, [])))();
  let VoidToBarChartWithSecondaryAxisOnly = () => (VoidToBarChartWithSecondaryAxisOnly = dart.constFn(dart.fnType(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly, [])))();
  let VoidToHorizontalBarChartWithSecondaryAxis = () => (VoidToHorizontalBarChartWithSecondaryAxis = dart.constFn(dart.fnType(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis, [])))();
  let VoidToShortTickLengthAxis = () => (VoidToShortTickLengthAxis = dart.constFn(dart.fnType(short_tick_length_axis.ShortTickLengthAxis, [])))();
  let VoidToCustomFontSizeAndColor = () => (VoidToCustomFontSizeAndColor = dart.constFn(dart.fnType(custom_font_size_and_color.CustomFontSizeAndColor, [])))();
  let VoidToMeasureAxisLabelAlignment = () => (VoidToMeasureAxisLabelAlignment = dart.constFn(dart.fnType(measure_axis_label_alignment.MeasureAxisLabelAlignment, [])))();
  let VoidToHiddenTicksAndLabelsAxis = () => (VoidToHiddenTicksAndLabelsAxis = dart.constFn(dart.fnType(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis, [])))();
  let VoidToStaticallyProvidedTicks = () => (VoidToStaticallyProvidedTicks = dart.constFn(dart.fnType(statically_provided_ticks.StaticallyProvidedTicks, [])))();
  let VoidToCustomAxisTickFormatters = () => (VoidToCustomAxisTickFormatters = dart.constFn(dart.fnType(custom_axis_tick_formatters.CustomAxisTickFormatters, [])))();
  let VoidToCustomMeasureTickCount = () => (VoidToCustomMeasureTickCount = dart.constFn(dart.fnType(custom_measure_tick_count.CustomMeasureTickCount, [])))();
  let VoidToIntegerOnlyMeasureAxis = () => (VoidToIntegerOnlyMeasureAxis = dart.constFn(dart.fnType(integer_only_measure_axis.IntegerOnlyMeasureAxis, [])))();
  let VoidToNonzeroBoundMeasureAxis = () => (VoidToNonzeroBoundMeasureAxis = dart.constFn(dart.fnType(nonzero_bound_measure_axis.NonzeroBoundMeasureAxis, [])))();
  let VoidToOrdinalInitialViewport = () => (VoidToOrdinalInitialViewport = dart.constFn(dart.fnType(ordinal_initial_viewport.OrdinalInitialViewport, [])))();
  let VoidToNumericInitialViewport = () => (VoidToNumericInitialViewport = dart.constFn(dart.fnType(numeric_initial_viewport.NumericInitialViewport, [])))();
  let VoidToGridlineDashPattern = () => (VoidToGridlineDashPattern = dart.constFn(dart.fnType(gridline_dash_pattern.GridlineDashPattern, [])))();
  let VoidToDisjointMeasureAxisLineChart = () => (VoidToDisjointMeasureAxisLineChart = dart.constFn(dart.fnType(line_disjoint_axis.DisjointMeasureAxisLineChart, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C4() {
      return C4 = dart.constList([], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 77,
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
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 89,
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
        [_Location_column]: 25,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 95,
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
        [_Location_column]: 25,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/axes_gallery.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C7;
  let C8;
  let C9;
  let C10;
  let C6;
  let C5;
  let C13;
  let C12;
  let C11;
  let C14;
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  let C15;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C25;
  let C24;
  let C28;
  let C31;
  let C32;
  let C33;
  let C34;
  let C30;
  let C29;
  let C37;
  let C36;
  let C35;
  let C38;
  let C41;
  let C42;
  let C43;
  let C44;
  let C40;
  let C39;
  let C47;
  let C46;
  let C45;
  let C48;
  let C51;
  let C52;
  let C53;
  let C54;
  let C50;
  let C49;
  let C57;
  let C56;
  let C55;
  let C58;
  let C61;
  let C62;
  let C63;
  let C64;
  let C60;
  let C59;
  let C67;
  let C66;
  let C65;
  let C68;
  let C71;
  let C72;
  let C73;
  let C74;
  let C70;
  let C69;
  let C77;
  let C76;
  let C75;
  let C78;
  let C81;
  let C82;
  let C83;
  let C84;
  let C80;
  let C79;
  let C87;
  let C86;
  let C85;
  let C88;
  let C91;
  let C92;
  let C93;
  let C94;
  let C90;
  let C89;
  let C97;
  let C96;
  let C95;
  let C98;
  let C101;
  let C102;
  let C103;
  let C104;
  let C100;
  let C99;
  let C107;
  let C106;
  let C105;
  let C108;
  let C111;
  let C112;
  let C113;
  let C114;
  let C110;
  let C109;
  let C117;
  let C116;
  let C115;
  let C118;
  let C121;
  let C122;
  let C123;
  let C124;
  let C120;
  let C119;
  let C127;
  let C126;
  let C125;
  let C128;
  let C131;
  let C132;
  let C133;
  let C134;
  let C130;
  let C129;
  let C137;
  let C136;
  let C135;
  let C138;
  let C141;
  let C142;
  let C143;
  let C144;
  let C140;
  let C139;
  let C147;
  let C146;
  let C145;
  let C148;
  let C151;
  let C152;
  let C153;
  let C154;
  let C150;
  let C149;
  let C157;
  let C156;
  let C155;
  let C158;
  let C161;
  let C162;
  let C163;
  let C164;
  let C160;
  let C159;
  axes_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Bar chart with Secondary Measure Axis", subtitle: "Bar chart with a series using a secondary measure axis", childBuilder: dart.fn(() => bar_secondary_axis.BarChartWithSecondaryAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToBarChartWithSecondaryAxis()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: "Bar chart with Secondary Measure Axis only", subtitle: "Bar chart with both series using secondary measure axis", childBuilder: dart.fn(() => bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.withRandomData({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), VoidToBarChartWithSecondaryAxisOnly()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), title: "Horizontal bar chart with Secondary Measure Axis", subtitle: "Horizontal Bar chart with a series using secondary measure axis", childBuilder: dart.fn(() => horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), VoidToHorizontalBarChartWithSecondaryAxis()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), title: "Short Ticks Axis", subtitle: "Bar chart with the primary measure axis having short ticks", childBuilder: dart.fn(() => short_tick_length_axis.ShortTickLengthAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), VoidToShortTickLengthAxis()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), title: "Custom Axis Fonts", subtitle: "Bar chart with custom axis font size and color", childBuilder: dart.fn(() => custom_font_size_and_color.CustomFontSizeAndColor.withRandomData({$creationLocationd_0dea112b090073317d4: C48 || CT.C48}), VoidToCustomFontSizeAndColor()), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C55 || CT.C55}), title: "Label Alignment Axis", subtitle: "Bar chart with custom measure axis label alignments", childBuilder: dart.fn(() => measure_axis_label_alignment.MeasureAxisLabelAlignment.withRandomData({$creationLocationd_0dea112b090073317d4: C58 || CT.C58}), VoidToMeasureAxisLabelAlignment()), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C65 || CT.C65}), title: "No Axis", subtitle: "Bar chart with only the axis line drawn", childBuilder: dart.fn(() => hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), VoidToHiddenTicksAndLabelsAxis()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), title: "Statically Provided Ticks", subtitle: "Bar chart with statically provided ticks", childBuilder: dart.fn(() => statically_provided_ticks.StaticallyProvidedTicks.withRandomData({$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), VoidToStaticallyProvidedTicks()), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), title: "Custom Formatter", subtitle: "Timeseries with custom domain and measure tick formatters", childBuilder: dart.fn(() => custom_axis_tick_formatters.CustomAxisTickFormatters.withRandomData({$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), VoidToCustomAxisTickFormatters()), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C95 || CT.C95}), title: "Custom Tick Count", subtitle: "Timeseries with custom measure axis tick count", childBuilder: dart.fn(() => custom_measure_tick_count.CustomMeasureTickCount.withRandomData({$creationLocationd_0dea112b090073317d4: C98 || CT.C98}), VoidToCustomMeasureTickCount()), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), title: "Integer Measure Ticks", subtitle: "Timeseries with only whole number measure axis ticks", childBuilder: dart.fn(() => integer_only_measure_axis.IntegerOnlyMeasureAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C108 || CT.C108}), VoidToIntegerOnlyMeasureAxis()), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C115 || CT.C115}), title: "Non-zero bound Axis", subtitle: "Timeseries with measure axis that does not include zero", childBuilder: dart.fn(() => nonzero_bound_measure_axis.NonzeroBoundMeasureAxis.withRandomData({$creationLocationd_0dea112b090073317d4: C118 || CT.C118}), VoidToNonzeroBoundMeasureAxis()), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C125 || CT.C125}), title: "Ordinal axis with initial viewport", subtitle: "Single series with initial viewport", childBuilder: dart.fn(() => ordinal_initial_viewport.OrdinalInitialViewport.withRandomData({$creationLocationd_0dea112b090073317d4: C128 || CT.C128}), VoidToOrdinalInitialViewport()), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C135 || CT.C135}), title: "Numeric axis with initial viewport", subtitle: "Initial viewport is set to a subset of the data", childBuilder: dart.fn(() => numeric_initial_viewport.NumericInitialViewport.withRandomData({$creationLocationd_0dea112b090073317d4: C138 || CT.C138}), VoidToNumericInitialViewport()), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C145 || CT.C145}), title: "Gridline dash pattern", subtitle: "Timeseries with measure gridlines that have a dash pattern", childBuilder: dart.fn(() => gridline_dash_pattern.GridlineDashPattern.withRandomData({$creationLocationd_0dea112b090073317d4: C148 || CT.C148}), VoidToGridlineDashPattern()), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.show_chart, {$creationLocationd_0dea112b090073317d4: C155 || CT.C155}), title: "Disjoint Measure Axes", subtitle: "Line chart with disjoint measure axes", childBuilder: dart.fn(() => line_disjoint_axis.DisjointMeasureAxisLineChart.withRandomData({$creationLocationd_0dea112b090073317d4: C158 || CT.C158}), VoidToDisjointMeasureAxisLineChart()), $creationLocationd_0dea112b090073317d4: C159 || CT.C159})]);
  };
  dart.trackLibraries("packages/example/axes/axes_gallery", {
    "package:example/axes/axes_gallery.dart": axes_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["axes_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCE,UAAO,gCACD,wDACgB,kBAAW,yFACtB,mDACG,wEACI,cAAU,+MAEtB,wDACgB,kBAAW,2FACtB,wDACG,yEACI,cAAU,gOAEtB,wDACgB,mCACP,eAAmB,kBAAW,oJAClC,8DAEH,iFACU,cACN,kPAEN,wDACgB,kBAAW,2FACtB,8BACG,4EACI,cAAU,2MAEtB,wDACgB,kBAAW,2FACtB,+BACG,gEACI,cAAU,qNAEtB,wDACgB,kBAAW,2FACtB,kCACG,qEACI,cAAU,6NAEtB,wDACgB,kBAAW,2FACtB,qBACG,yDACI,cAAU,2NAEtB,wDACgB,kBAAW,2FACtB,uCACG,0DACI,cAAU,sNAEtB,wDACgB,kBAAW,yFACtB,8BACG,2EACI,cAAU,0NAEtB,wDACgB,kBAAW,yFACtB,+BACG,gEACI,cAAU,oNAEtB,wDACgB,kBAAW,2FACtB,mCACG,sEACI,cAAU,wNAEtB,wDACgB,kBAAW,2FACtB,iCACG,yEACI,cAAU,2NAEtB,wDACgB,kBAAW,6FACtB,gDACG,qDACI,cAAU,uNAEtB,wDACgB,kBAAW,2FACtB,gDACG,iEACI,cAAU,uNAEtB,wDACgB,kBAAW,2FACtB,mCACG,4EACI,cAAU,8MAEtB,wDACgB,kBAAW,2FACtB,mCACG,uDACI,cAAU;EAG9B","file":"axes_gallery.ddc.js"}');
  // Exports:
  return {
    axes__axes_gallery: axes_gallery
  };
});

//# sourceMappingURL=axes_gallery.ddc.js.map
