define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/legends/simple_series_legend', 'packages/example/legends/series_legend_options', 'packages/example/legends/legend_custom_symbol', 'packages/example/legends/default_hidden_series_legend', 'packages/example/legends/series_legend_with_measures', 'packages/example/legends/simple_datum_legend', 'packages/example/legends/datum_legend_options', 'packages/example/legends/datum_legend_with_measures'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__legends__simple_series_legend, packages__example__legends__series_legend_options, packages__example__legends__legend_custom_symbol, packages__example__legends__default_hidden_series_legend, packages__example__legends__series_legend_with_measures, packages__example__legends__simple_datum_legend, packages__example__legends__datum_legend_options, packages__example__legends__datum_legend_with_measures) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icons = packages__flutter__material.src__material__icons;
  const simple_series_legend = packages__example__legends__simple_series_legend.legends__simple_series_legend;
  const series_legend_options = packages__example__legends__series_legend_options.legends__series_legend_options;
  const legend_custom_symbol = packages__example__legends__legend_custom_symbol.legends__legend_custom_symbol;
  const default_hidden_series_legend = packages__example__legends__default_hidden_series_legend.legends__default_hidden_series_legend;
  const series_legend_with_measures = packages__example__legends__series_legend_with_measures.legends__series_legend_with_measures;
  const simple_datum_legend = packages__example__legends__simple_datum_legend.legends__simple_datum_legend;
  const datum_legend_options = packages__example__legends__datum_legend_options.legends__datum_legend_options;
  const datum_legend_with_measures = packages__example__legends__datum_legend_with_measures.legends__datum_legend_with_measures;
  const legends_gallery = Object.create(dart.library);
  let VoidToSimpleSeriesLegend = () => (VoidToSimpleSeriesLegend = dart.constFn(dart.fnType(simple_series_legend.SimpleSeriesLegend, [])))();
  let VoidToLegendOptions = () => (VoidToLegendOptions = dart.constFn(dart.fnType(series_legend_options.LegendOptions, [])))();
  let VoidToLegendWithCustomSymbol = () => (VoidToLegendWithCustomSymbol = dart.constFn(dart.fnType(legend_custom_symbol.LegendWithCustomSymbol, [])))();
  let VoidToDefaultHiddenSeriesLegend = () => (VoidToDefaultHiddenSeriesLegend = dart.constFn(dart.fnType(default_hidden_series_legend.DefaultHiddenSeriesLegend, [])))();
  let VoidToLegendWithMeasures = () => (VoidToLegendWithMeasures = dart.constFn(dart.fnType(series_legend_with_measures.LegendWithMeasures, [])))();
  let VoidToSimpleDatumLegend = () => (VoidToSimpleDatumLegend = dart.constFn(dart.fnType(simple_datum_legend.SimpleDatumLegend, [])))();
  let VoidToDatumLegendOptions = () => (VoidToDatumLegendOptions = dart.constFn(dart.fnType(datum_legend_options.DatumLegendOptions, [])))();
  let VoidToDatumLegendWithMeasures = () => (VoidToDatumLegendWithMeasures = dart.constFn(dart.fnType(datum_legend_with_measures.DatumLegendWithMeasures, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 30,
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
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 33,
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
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 36,
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
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 40,
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
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 43,
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
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 46,
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
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 49,
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
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 52,
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
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 55,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 58,
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
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 61,
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
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 64,
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
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 67,
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
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 71,
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
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 74,
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
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 77,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legends_gallery.dart"
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
  legends_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Series Legend", subtitle: "A series legend for a bar chart with default settings", childBuilder: dart.fn(() => simple_series_legend.SimpleSeriesLegend.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToSimpleSeriesLegend()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: "Series Legend Options", subtitle: "A series legend with custom positioning and spacing for a bar chart", childBuilder: dart.fn(() => series_legend_options.LegendOptions.withRandomData({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), VoidToLegendOptions()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), title: "Series Legend Custom Symbol", subtitle: "A series legend using a custom symbol renderer", childBuilder: dart.fn(() => legend_custom_symbol.LegendWithCustomSymbol.withRandomData({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), VoidToLegendWithCustomSymbol()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), title: "Default Hidden Series Legend", subtitle: "A series legend showing a series hidden by default", childBuilder: dart.fn(() => default_hidden_series_legend.DefaultHiddenSeriesLegend.withRandomData({$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), VoidToDefaultHiddenSeriesLegend()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.insert_chart, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), title: "Series legend with measures", subtitle: "Series legend with measures and measure formatting", childBuilder: dart.fn(() => series_legend_with_measures.LegendWithMeasures.withRandomData({$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), VoidToLegendWithMeasures()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.pie_chart, {$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), title: "Datum Legend", subtitle: "A datum legend for a pie chart with default settings", childBuilder: dart.fn(() => simple_datum_legend.SimpleDatumLegend.withRandomData({$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), VoidToSimpleDatumLegend()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.pie_chart, {$creationLocationd_0dea112b090073317d4: C61 || CT.C61}), title: "Datum Legend Options", subtitle: "A datum legend with custom positioning and spacing for a pie chart", childBuilder: dart.fn(() => datum_legend_options.DatumLegendOptions.withRandomData({$creationLocationd_0dea112b090073317d4: C64 || CT.C64}), VoidToDatumLegendOptions()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.pie_chart, {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), title: "Datum legend with measures", subtitle: "Datum legend with measures and measure formatting", childBuilder: dart.fn(() => datum_legend_with_measures.DatumLegendWithMeasures.withRandomData({$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), VoidToDatumLegendWithMeasures()), $creationLocationd_0dea112b090073317d4: C75 || CT.C75})]);
  };
  dart.trackLibraries("packages/example/legends/legends_gallery", {
    "package:example/legends/legends_gallery.dart": legends_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["legends_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BE,UAAO,gCACD,wDACgB,kBAAW,yFACtB,2BACG,uEACI,cAAU,mMAEtB,wDACgB,kBAAW,2FACtB,mCAEH,qFACU,cAAU,8LAEtB,wDACgB,kBAAW,2FACtB,yCACG,gEACI,cAAU,+MAEtB,wDACgB,kBAAW,2FACtB,0CACG,oEACI,cAAU,6NAEtB,wDACgB,kBAAW,2FACtB,yCACG,oEACI,cAAU,8MAEtB,wDACgB,kBAAW,wFACtB,0BACG,sEACI,cAAU,oMAEtB,wDACgB,kBAAW,wFACtB,kCAEH,oFACU,cAAU,uMAEtB,wDACgB,kBAAW,wFACtB,wCACG,mEACI,cAAU;EAG9B","file":"legends_gallery.ddc.js"}');
  // Exports:
  return {
    legends__legends_gallery: legends_gallery
  };
});

//# sourceMappingURL=legends_gallery.ddc.js.map
