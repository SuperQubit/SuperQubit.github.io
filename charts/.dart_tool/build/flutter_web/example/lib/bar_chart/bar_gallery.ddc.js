define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/bar_chart/simple', 'packages/example/bar_chart/stacked', 'packages/example/bar_chart/grouped', 'packages/example/bar_chart/grouped_stacked', 'packages/example/bar_chart/grouped_target_line', 'packages/example/bar_chart/grouped_single_target_line', 'packages/example/bar_chart/stacked_target_line', 'packages/example/bar_chart/horizontal', 'packages/example/bar_chart/stacked_horizontal', 'packages/example/bar_chart/horizontal_bar_label', 'packages/example/bar_chart/horizontal_bar_label_custom', 'packages/example/bar_chart/spark_bar', 'packages/example/bar_chart/grouped_fill_color', 'packages/example/bar_chart/stacked_fill_color', 'packages/example/bar_chart/pattern_forward_hatch', 'packages/example/bar_chart/horizontal_pattern_forward_hatch', 'packages/example/bar_chart/grouped_stacked_weight_pattern', 'packages/example/bar_chart/custom_rounded_bars'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__bar_chart__simple, packages__example__bar_chart__stacked, packages__example__bar_chart__grouped, packages__example__bar_chart__grouped_stacked, packages__example__bar_chart__grouped_target_line, packages__example__bar_chart__grouped_single_target_line, packages__example__bar_chart__stacked_target_line, packages__example__bar_chart__horizontal, packages__example__bar_chart__stacked_horizontal, packages__example__bar_chart__horizontal_bar_label, packages__example__bar_chart__horizontal_bar_label_custom, packages__example__bar_chart__spark_bar, packages__example__bar_chart__grouped_fill_color, packages__example__bar_chart__stacked_fill_color, packages__example__bar_chart__pattern_forward_hatch, packages__example__bar_chart__horizontal_pattern_forward_hatch, packages__example__bar_chart__grouped_stacked_weight_pattern, packages__example__bar_chart__custom_rounded_bars) {
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
  const simple = packages__example__bar_chart__simple.bar_chart__simple;
  const stacked = packages__example__bar_chart__stacked.bar_chart__stacked;
  const grouped = packages__example__bar_chart__grouped.bar_chart__grouped;
  const grouped_stacked = packages__example__bar_chart__grouped_stacked.bar_chart__grouped_stacked;
  const grouped_target_line = packages__example__bar_chart__grouped_target_line.bar_chart__grouped_target_line;
  const grouped_single_target_line = packages__example__bar_chart__grouped_single_target_line.bar_chart__grouped_single_target_line;
  const stacked_target_line = packages__example__bar_chart__stacked_target_line.bar_chart__stacked_target_line;
  const horizontal = packages__example__bar_chart__horizontal.bar_chart__horizontal;
  const stacked_horizontal = packages__example__bar_chart__stacked_horizontal.bar_chart__stacked_horizontal;
  const horizontal_bar_label = packages__example__bar_chart__horizontal_bar_label.bar_chart__horizontal_bar_label;
  const horizontal_bar_label_custom = packages__example__bar_chart__horizontal_bar_label_custom.bar_chart__horizontal_bar_label_custom;
  const spark_bar = packages__example__bar_chart__spark_bar.bar_chart__spark_bar;
  const grouped_fill_color = packages__example__bar_chart__grouped_fill_color.bar_chart__grouped_fill_color;
  const stacked_fill_color = packages__example__bar_chart__stacked_fill_color.bar_chart__stacked_fill_color;
  const pattern_forward_hatch = packages__example__bar_chart__pattern_forward_hatch.bar_chart__pattern_forward_hatch;
  const horizontal_pattern_forward_hatch = packages__example__bar_chart__horizontal_pattern_forward_hatch.bar_chart__horizontal_pattern_forward_hatch;
  const grouped_stacked_weight_pattern = packages__example__bar_chart__grouped_stacked_weight_pattern.bar_chart__grouped_stacked_weight_pattern;
  const custom_rounded_bars = packages__example__bar_chart__custom_rounded_bars.bar_chart__custom_rounded_bars;
  const bar_gallery = Object.create(dart.library);
  let VoidToSimpleBarChart = () => (VoidToSimpleBarChart = dart.constFn(dart.fnType(simple.SimpleBarChart, [])))();
  let VoidToStackedBarChart = () => (VoidToStackedBarChart = dart.constFn(dart.fnType(stacked.StackedBarChart, [])))();
  let VoidToGroupedBarChart = () => (VoidToGroupedBarChart = dart.constFn(dart.fnType(grouped.GroupedBarChart, [])))();
  let VoidToGroupedStackedBarChart = () => (VoidToGroupedStackedBarChart = dart.constFn(dart.fnType(grouped_stacked.GroupedStackedBarChart, [])))();
  let VoidToGroupedBarTargetLineChart = () => (VoidToGroupedBarTargetLineChart = dart.constFn(dart.fnType(grouped_target_line.GroupedBarTargetLineChart, [])))();
  let VoidToGroupedBarSingleTargetLineChart = () => (VoidToGroupedBarSingleTargetLineChart = dart.constFn(dart.fnType(grouped_single_target_line.GroupedBarSingleTargetLineChart, [])))();
  let VoidToStackedBarTargetLineChart = () => (VoidToStackedBarTargetLineChart = dart.constFn(dart.fnType(stacked_target_line.StackedBarTargetLineChart, [])))();
  let VoidToHorizontalBarChart = () => (VoidToHorizontalBarChart = dart.constFn(dart.fnType(horizontal.HorizontalBarChart, [])))();
  let VoidToStackedHorizontalBarChart = () => (VoidToStackedHorizontalBarChart = dart.constFn(dart.fnType(stacked_horizontal.StackedHorizontalBarChart, [])))();
  let VoidToHorizontalBarLabelChart = () => (VoidToHorizontalBarLabelChart = dart.constFn(dart.fnType(horizontal_bar_label.HorizontalBarLabelChart, [])))();
  let VoidToHorizontalBarLabelCustomChart = () => (VoidToHorizontalBarLabelCustomChart = dart.constFn(dart.fnType(horizontal_bar_label_custom.HorizontalBarLabelCustomChart, [])))();
  let VoidToSparkBar = () => (VoidToSparkBar = dart.constFn(dart.fnType(spark_bar.SparkBar, [])))();
  let VoidToGroupedFillColorBarChart = () => (VoidToGroupedFillColorBarChart = dart.constFn(dart.fnType(grouped_fill_color.GroupedFillColorBarChart, [])))();
  let VoidToStackedFillColorBarChart = () => (VoidToStackedFillColorBarChart = dart.constFn(dart.fnType(stacked_fill_color.StackedFillColorBarChart, [])))();
  let VoidToPatternForwardHatchBarChart = () => (VoidToPatternForwardHatchBarChart = dart.constFn(dart.fnType(pattern_forward_hatch.PatternForwardHatchBarChart, [])))();
  let VoidToHorizontalPatternForwardHatchBarChart = () => (VoidToHorizontalPatternForwardHatchBarChart = dart.constFn(dart.fnType(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart, [])))();
  let VoidToGroupedStackedWeightPatternBarChart = () => (VoidToGroupedStackedWeightPatternBarChart = dart.constFn(dart.fnType(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart, [])))();
  let VoidToCustomRoundedBars = () => (VoidToCustomRoundedBars = dart.constFn(dart.fnType(custom_rounded_bars.CustomRoundedBars, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 40,
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
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
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
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 43,
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 46,
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
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 49,
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
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 52,
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
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
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
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 87,
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
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 91,
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
        [_Location_column]: 37,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 91,
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
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134, C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154, C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188, C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/bar_gallery.dart"
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
  let C24;
  let C27;
  let C28;
  let C29;
  let C30;
  let C26;
  let C25;
  let C33;
  let C32;
  let C31;
  let C34;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C42;
  let C41;
  let C44;
  let C47;
  let C48;
  let C49;
  let C50;
  let C46;
  let C45;
  let C53;
  let C52;
  let C51;
  let C54;
  let C57;
  let C58;
  let C59;
  let C60;
  let C56;
  let C55;
  let C63;
  let C62;
  let C61;
  let C64;
  let C67;
  let C68;
  let C69;
  let C70;
  let C66;
  let C65;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C75;
  let C74;
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
  let C90;
  let C91;
  let C89;
  let C88;
  let C92;
  let C95;
  let C96;
  let C97;
  let C98;
  let C94;
  let C93;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C103;
  let C102;
  let C106;
  let C109;
  let C110;
  let C111;
  let C112;
  let C108;
  let C107;
  let C115;
  let C114;
  let C113;
  let C118;
  let C119;
  let C117;
  let C116;
  let C120;
  let C123;
  let C124;
  let C125;
  let C126;
  let C122;
  let C121;
  let C129;
  let C128;
  let C127;
  let C130;
  let C133;
  let C134;
  let C135;
  let C136;
  let C132;
  let C131;
  let C139;
  let C138;
  let C137;
  let C140;
  let C143;
  let C144;
  let C145;
  let C146;
  let C142;
  let C141;
  let C149;
  let C148;
  let C147;
  let C150;
  let C153;
  let C154;
  let C155;
  let C156;
  let C152;
  let C151;
  let C159;
  let C158;
  let C157;
  let C160;
  let C163;
  let C164;
  let C165;
  let C166;
  let C162;
  let C161;
  let C169;
  let C168;
  let C167;
  let C172;
  let C173;
  let C171;
  let C170;
  let C174;
  let C177;
  let C178;
  let C179;
  let C180;
  let C176;
  let C175;
  let C183;
  let C182;
  let C181;
  let C184;
  let C187;
  let C188;
  let C189;
  let C190;
  let C186;
  let C185;
  let C193;
  let C192;
  let C191;
  let C194;
  let C197;
  let C198;
  let C199;
  let C200;
  let C196;
  let C195;
  bar_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Simple Bar Chart", subtitle: "Simple bar chart with a single series", childBuilder: dart.fn(() => simple.SimpleBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToSimpleBarChart()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: "Stacked Bar Chart", subtitle: "Stacked bar chart with multiple series", childBuilder: dart.fn(() => stacked.StackedBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), VoidToStackedBarChart()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), title: "Grouped Bar Chart", subtitle: "Grouped bar chart with multiple series", childBuilder: dart.fn(() => grouped.GroupedBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), VoidToGroupedBarChart()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), title: "Grouped Stacked Bar Chart", subtitle: "Grouped and stacked bar chart with multiple series", childBuilder: dart.fn(() => grouped_stacked.GroupedStackedBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), VoidToGroupedStackedBarChart()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), title: "Grouped Bar Target Line Chart", subtitle: "Grouped bar target line chart with multiple series", childBuilder: dart.fn(() => grouped_target_line.GroupedBarTargetLineChart.withRandomData({$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), VoidToGroupedBarTargetLineChart()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), title: "Grouped Bar Single Target Line Chart", subtitle: "Grouped bar target line chart with multiple series and a single target", childBuilder: dart.fn(() => grouped_single_target_line.GroupedBarSingleTargetLineChart.withRandomData({$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), VoidToGroupedBarSingleTargetLineChart()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C61 || CT.C61}), title: "Stacked Bar Target Line Chart", subtitle: "Stacked bar target line chart with multiple series", childBuilder: dart.fn(() => stacked_target_line.StackedBarTargetLineChart.withRandomData({$creationLocationd_0dea112b090073317d4: C64 || CT.C64}), VoidToStackedBarTargetLineChart()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), title: "Horizontal Bar Chart", subtitle: "Horizontal bar chart with a single series", childBuilder: dart.fn(() => horizontal.HorizontalBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), VoidToHorizontalBarChart()), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), title: "Stacked Horizontal Bar Chart", subtitle: "Stacked horizontal bar chart with multiple series", childBuilder: dart.fn(() => stacked_horizontal.StackedHorizontalBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C92 || CT.C92}), VoidToStackedHorizontalBarChart()), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), title: "Horizontal Bar Chart with Bar Labels", subtitle: "Horizontal bar chart with a single series and bar labels", childBuilder: dart.fn(() => horizontal_bar_label.HorizontalBarLabelChart.withRandomData({$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), VoidToHorizontalBarLabelChart()), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), title: "Horizontal Bar Chart with Custom Bar Labels", subtitle: "Bar labels with customized styling", childBuilder: dart.fn(() => horizontal_bar_label_custom.HorizontalBarLabelCustomChart.withRandomData({$creationLocationd_0dea112b090073317d4: C120 || CT.C120}), VoidToHorizontalBarLabelCustomChart()), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C127 || CT.C127}), title: "Spark Bar Chart", subtitle: "Spark Bar Chart", childBuilder: dart.fn(() => spark_bar.SparkBar.withRandomData({$creationLocationd_0dea112b090073317d4: C130 || CT.C130}), VoidToSparkBar()), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C137 || CT.C137}), title: "Grouped Fill Color Bar Chart", subtitle: "Grouped bar chart with fill colors", childBuilder: dart.fn(() => grouped_fill_color.GroupedFillColorBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C140 || CT.C140}), VoidToGroupedFillColorBarChart()), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C147 || CT.C147}), title: "Stacked Fill Color Bar Chart", subtitle: "Stacked bar chart with fill colors", childBuilder: dart.fn(() => stacked_fill_color.StackedFillColorBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C150 || CT.C150}), VoidToStackedFillColorBarChart()), $creationLocationd_0dea112b090073317d4: C151 || CT.C151}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C157 || CT.C157}), title: "Pattern Forward Hatch Bar Chart", subtitle: "Pattern Forward Hatch Bar Chart", childBuilder: dart.fn(() => pattern_forward_hatch.PatternForwardHatchBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C160 || CT.C160}), VoidToPatternForwardHatchBarChart()), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new basic.Transform.rotate({angle: 1.5708, child: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), title: "Horizontal Pattern Forward Hatch Bar Chart", subtitle: "Horizontal Pattern Forward Hatch Bar Chart", childBuilder: dart.fn(() => horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C174 || CT.C174}), VoidToHorizontalPatternForwardHatchBarChart()), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C181 || CT.C181}), title: "Weight Pattern Bar Chart", subtitle: "Grouped and stacked bar chart with a weight pattern", childBuilder: dart.fn(() => grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C184 || CT.C184}), VoidToGroupedStackedWeightPatternBarChart()), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C191 || CT.C191}), title: "Bar Chart with custom bar radius", subtitle: "Custom rounded bar corners", childBuilder: dart.fn(() => custom_rounded_bars.CustomRoundedBars.withRandomData({$creationLocationd_0dea112b090073317d4: C194 || CT.C194}), VoidToCustomRoundedBars()), $creationLocationd_0dea112b090073317d4: C195 || CT.C195})]);
  };
  dart.trackLibraries("packages/example/bar_chart/bar_gallery", {
    "package:example/bar_chart/bar_gallery.dart": bar_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bar_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCE,UAAO,gCACD,wDACgB,kBAAW,yFACtB,8BACG,uDACI,cAAU,6KAEtB,wDACgB,kBAAW,2FACtB,+BACG,wDACI,cAAU,oLAEtB,wDACgB,kBAAW,2FACtB,+BACG,wDACI,cAAU,oLAEtB,wDACgB,kBAAW,2FACtB,uCACG,oEACI,cAAU,0MAEtB,wDACgB,kBAAW,2FACtB,2CACG,oEACI,cAAU,oNAEtB,wDACgB,kBAAW,2FACtB,kDAEH,wFACU,cAAU,uOAEtB,wDACgB,kBAAW,2FACtB,2CACG,oEACI,cAAU,oNAEtB,wDACgB,mCACP,eAAmB,kBAAW,oJAClC,kCACG,2DACI,cAAU,6LAEtB,wDACgB,mCACP,eAAmB,kBAAW,oJAClC,0CACG,mEACI,cAAU,mNAEtB,wDACgB,mCACP,eAAmB,kBAAW,sJAClC,kDACG,0EACI,cAAU,qNAEtB,wDACgB,mCACP,eAAmB,kBAAW,wJAClC,yDACG,oDACI,cAAU,wOAEtB,wDACgB,kBAAW,6FACtB,6BACG,iCACI,cAAU,4KAEtB,wDACgB,kBAAW,6FACtB,0CACG,oDACI,cAAU,qNAEtB,wDACgB,kBAAW,6FACtB,0CACG,oDACI,cAAU,qNAEtB,wDACgB,kBAAW,6FACtB,6CACG,iDACI,cAAU,8NAEtB,wDACgB,mCACP,eAAmB,kBAAW,wJAClC,wDACG,4DACI,cACN,6PAEN,wDACgB,kBAAW,6FACtB,sCACG,qEACI,cACN,uPAEN,wDACgB,kBAAW,6FACtB,8CACG,4CACI,cAAU;EAG9B","file":"bar_gallery.ddc.js"}');
  // Exports:
  return {
    bar_chart__bar_gallery: bar_gallery
  };
});

//# sourceMappingURL=bar_gallery.ddc.js.map
