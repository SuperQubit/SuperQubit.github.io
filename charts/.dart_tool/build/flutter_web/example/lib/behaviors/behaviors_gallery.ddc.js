define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/behaviors/selection_bar_highlight', 'packages/example/behaviors/selection_line_highlight', 'packages/example/behaviors/selection_line_highlight_custom_shape', 'packages/example/behaviors/selection_scatter_plot_highlight', 'packages/example/behaviors/selection_callback_example', 'packages/example/behaviors/selection_user_managed', 'packages/example/behaviors/initial_selection', 'packages/example/behaviors/chart_title', 'packages/example/behaviors/slider', 'packages/example/behaviors/percent_of_domain', 'packages/example/behaviors/percent_of_domain_by_category', 'packages/example/behaviors/percent_of_series', 'packages/example/behaviors/sliding_viewport_on_selection', 'packages/example/behaviors/initial_hint_animation'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__behaviors__selection_bar_highlight, packages__example__behaviors__selection_line_highlight, packages__example__behaviors__selection_line_highlight_custom_shape, packages__example__behaviors__selection_scatter_plot_highlight, packages__example__behaviors__selection_callback_example, packages__example__behaviors__selection_user_managed, packages__example__behaviors__initial_selection, packages__example__behaviors__chart_title, packages__example__behaviors__slider, packages__example__behaviors__percent_of_domain, packages__example__behaviors__percent_of_domain_by_category, packages__example__behaviors__percent_of_series, packages__example__behaviors__sliding_viewport_on_selection, packages__example__behaviors__initial_hint_animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icons = packages__flutter__material.src__material__icons;
  const selection_bar_highlight = packages__example__behaviors__selection_bar_highlight.behaviors__selection_bar_highlight;
  const selection_line_highlight = packages__example__behaviors__selection_line_highlight.behaviors__selection_line_highlight;
  const selection_line_highlight_custom_shape = packages__example__behaviors__selection_line_highlight_custom_shape.behaviors__selection_line_highlight_custom_shape;
  const selection_scatter_plot_highlight = packages__example__behaviors__selection_scatter_plot_highlight.behaviors__selection_scatter_plot_highlight;
  const selection_callback_example = packages__example__behaviors__selection_callback_example.behaviors__selection_callback_example;
  const selection_user_managed = packages__example__behaviors__selection_user_managed.behaviors__selection_user_managed;
  const initial_selection = packages__example__behaviors__initial_selection.behaviors__initial_selection;
  const chart_title = packages__example__behaviors__chart_title.behaviors__chart_title;
  const slider = packages__example__behaviors__slider.behaviors__slider;
  const percent_of_domain = packages__example__behaviors__percent_of_domain.behaviors__percent_of_domain;
  const percent_of_domain_by_category = packages__example__behaviors__percent_of_domain_by_category.behaviors__percent_of_domain_by_category;
  const percent_of_series = packages__example__behaviors__percent_of_series.behaviors__percent_of_series;
  const sliding_viewport_on_selection = packages__example__behaviors__sliding_viewport_on_selection.behaviors__sliding_viewport_on_selection;
  const initial_hint_animation = packages__example__behaviors__initial_hint_animation.behaviors__initial_hint_animation;
  const behaviors_gallery = Object.create(dart.library);
  let VoidToSelectionBarHighlight = () => (VoidToSelectionBarHighlight = dart.constFn(dart.fnType(selection_bar_highlight.SelectionBarHighlight, [])))();
  let VoidToSelectionLineHighlight = () => (VoidToSelectionLineHighlight = dart.constFn(dart.fnType(selection_line_highlight.SelectionLineHighlight, [])))();
  let VoidToSelectionLineHighlightCustomShape = () => (VoidToSelectionLineHighlightCustomShape = dart.constFn(dart.fnType(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape, [])))();
  let VoidToSelectionScatterPlotHighlight = () => (VoidToSelectionScatterPlotHighlight = dart.constFn(dart.fnType(selection_scatter_plot_highlight.SelectionScatterPlotHighlight, [])))();
  let VoidToSelectionCallbackExample = () => (VoidToSelectionCallbackExample = dart.constFn(dart.fnType(selection_callback_example.SelectionCallbackExample, [])))();
  let VoidToSelectionUserManaged = () => (VoidToSelectionUserManaged = dart.constFn(dart.fnType(selection_user_managed.SelectionUserManaged, [])))();
  let VoidToInitialSelection = () => (VoidToInitialSelection = dart.constFn(dart.fnType(initial_selection.InitialSelection, [])))();
  let VoidToChartTitleLine = () => (VoidToChartTitleLine = dart.constFn(dart.fnType(chart_title.ChartTitleLine, [])))();
  let VoidToSliderLine = () => (VoidToSliderLine = dart.constFn(dart.fnType(slider.SliderLine, [])))();
  let VoidToPercentOfDomainBarChart = () => (VoidToPercentOfDomainBarChart = dart.constFn(dart.fnType(percent_of_domain.PercentOfDomainBarChart, [])))();
  let VoidToPercentOfDomainByCategoryBarChart = () => (VoidToPercentOfDomainByCategoryBarChart = dart.constFn(dart.fnType(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart, [])))();
  let VoidToPercentOfSeriesBarChart = () => (VoidToPercentOfSeriesBarChart = dart.constFn(dart.fnType(percent_of_series.PercentOfSeriesBarChart, [])))();
  let VoidToSlidingViewportOnSelection = () => (VoidToSlidingViewportOnSelection = dart.constFn(dart.fnType(sliding_viewport_on_selection.SlidingViewportOnSelection, [])))();
  let VoidToInitialHintAnimation = () => (VoidToInitialHintAnimation = dart.constFn(dart.fnType(initial_hint_animation.InitialHintAnimation, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 36,
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
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 39,
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
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 42,
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
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 45,
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
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 48,
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
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 51,
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
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 55,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 58,
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
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 61,
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
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 64,
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
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 67,
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
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 71,
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
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 74,
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
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 77,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 80,
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
        [_Location_column]: 25,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 99,
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
        [_Location_column]: 25,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/behaviors_gallery.dart"
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
  let C74;
  let C77;
  let C78;
  let C79;
  let C80;
  let C76;
  let C75;
  let C83;
  let C82;
  let C81;
  let C84;
  let C87;
  let C88;
  let C89;
  let C90;
  let C86;
  let C85;
  let C93;
  let C92;
  let C91;
  let C94;
  let C97;
  let C98;
  let C99;
  let C100;
  let C96;
  let C95;
  let C103;
  let C102;
  let C101;
  let C104;
  let C107;
  let C108;
  let C109;
  let C110;
  let C106;
  let C105;
  let C113;
  let C112;
  let C111;
  let C114;
  let C117;
  let C118;
  let C119;
  let C120;
  let C116;
  let C115;
  let C123;
  let C122;
  let C121;
  let C124;
  let C127;
  let C128;
  let C129;
  let C130;
  let C126;
  let C125;
  let C133;
  let C132;
  let C131;
  let C134;
  let C137;
  let C138;
  let C139;
  let C140;
  let C136;
  let C135;
  behaviors_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Selection Bar Highlight", subtitle: "Simple bar chart with tap activation", childBuilder: dart.fn(() => selection_bar_highlight.SelectionBarHighlight.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToSelectionBarHighlight()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: "Selection Line Highlight", subtitle: "Line chart with tap and drag activation", childBuilder: dart.fn(() => selection_line_highlight.SelectionLineHighlight.withRandomData({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), VoidToSelectionLineHighlight()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), title: "Selection Line Highlight Custom Shape", subtitle: "Line chart with tap and drag activation and a custom shape", childBuilder: dart.fn(() => selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.withRandomData({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), VoidToSelectionLineHighlightCustomShape()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), title: "Selection Scatter Plot Highlight", subtitle: "Scatter plot chart with tap and drag activation", childBuilder: dart.fn(() => selection_scatter_plot_highlight.SelectionScatterPlotHighlight.withRandomData({$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), VoidToSelectionScatterPlotHighlight()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), title: "Selection Callback Example", subtitle: "Timeseries that updates external components on selection", childBuilder: dart.fn(() => selection_callback_example.SelectionCallbackExample.withRandomData({$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), VoidToSelectionCallbackExample()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), title: "User managed selection", subtitle: "Example where selection can be set and cleared programmatically", childBuilder: dart.fn(() => selection_user_managed.SelectionUserManaged.withRandomData({$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), VoidToSelectionUserManaged()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C61 || CT.C61}), title: "Bar Chart with initial selection", subtitle: "Single series with initial selection", childBuilder: dart.fn(() => initial_selection.InitialSelection.withRandomData({$creationLocationd_0dea112b090073317d4: C64 || CT.C64}), VoidToInitialSelection()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), title: "Line Chart with Chart Titles", subtitle: "Line chart with four chart titles", childBuilder: dart.fn(() => chart_title.ChartTitleLine.withRandomData({$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), VoidToChartTitleLine()), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.flag, {$creationLocationd_0dea112b090073317d4: C81 || CT.C81}), title: "Line Chart with Slider", subtitle: "Line chart with a slider behavior", childBuilder: dart.fn(() => slider.SliderLine.withRandomData({$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), VoidToSliderLine()), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C91 || CT.C91}), title: "Percent of Domain", subtitle: "Stacked bar chart with measures calculated as percent of " + "domain", childBuilder: dart.fn(() => percent_of_domain.PercentOfDomainBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C94 || CT.C94}), VoidToPercentOfDomainBarChart()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C101 || CT.C101}), title: "Percent of Domain by Category", subtitle: "Grouped stacked bar chart with measures calculated as " + "percent of domain and series category", childBuilder: dart.fn(() => percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C104 || CT.C104}), VoidToPercentOfDomainByCategoryBarChart()), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C111 || CT.C111}), title: "Percent of Series", subtitle: "Grouped bar chart with measures calculated as percent of " + "series", childBuilder: dart.fn(() => percent_of_series.PercentOfSeriesBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), VoidToPercentOfSeriesBarChart()), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C121 || CT.C121}), title: "Sliding viewport on domain selection", subtitle: "Center viewport on selected domain", childBuilder: dart.fn(() => sliding_viewport_on_selection.SlidingViewportOnSelection.withRandomData({$creationLocationd_0dea112b090073317d4: C124 || CT.C124}), VoidToSlidingViewportOnSelection()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C131 || CT.C131}), title: "Initial hint animation ", subtitle: "Animate into final viewport", childBuilder: dart.fn(() => initial_hint_animation.InitialHintAnimation.withRandomData({$creationLocationd_0dea112b090073317d4: C134 || CT.C134}), VoidToInitialHintAnimation()), $creationLocationd_0dea112b090073317d4: C135 || CT.C135})]);
  };
  dart.trackLibraries("packages/example/behaviors/behaviors_gallery", {
    "package:example/behaviors/behaviors_gallery.dart": behaviors_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["behaviors_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCE,UAAO,gCACD,wDACgB,kBAAW,iFACtB,qCACG,sDACI,cAAU,4MAEtB,wDACgB,kBAAW,mFACtB,sCACG,yDACI,cAAU,mNAEtB,wDACgB,kBAAW,mFACtB,mDACG,4EACI,cACN,sPAEN,wDACgB,kBAAW,mFACtB,8CACG,iEACI,cAAU,yOAEtB,wDACgB,kBAAW,mFACtB,wCACG,0EACI,cAAU,yNAEtB,wDACgB,kBAAW,mFACtB,oCAEH,iFACU,cAAU,6MAEtB,wDACgB,kBAAW,2FACtB,8CACG,sDACI,cAAU,gMAEtB,wDACgB,kBAAW,mFACtB,0CACG,mDACI,cAAU,sLAEtB,wDACgB,kBAAW,mFACtB,oCACG,mDACI,cAAU,yKAEtB,wDACgB,kBAAW,2FACtB,+BACG,AAA4D,8DAClE,wBACU,cAAU,8MAEtB,wDACgB,kBAAW,6FACtB,2CACG,2DACN,uDACU,cACN,kPAEN,wDACgB,kBAAW,6FACtB,+BACG,AAA4D,8DAClE,wBACU,cAAU,kNAEtB,wDACgB,kBAAW,6FACtB,kDACG,oDACI,cAAU,oOAEtB,wDACgB,kBAAW,6FACtB,qCACG,6CACI,cAAU;EAG9B","file":"behaviors_gallery.ddc.js"}');
  // Exports:
  return {
    behaviors__behaviors_gallery: behaviors_gallery
  };
});

//# sourceMappingURL=behaviors_gallery.ddc.js.map
