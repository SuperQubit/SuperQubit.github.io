define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/a11y/domain_a11y_explore_bar_chart'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__a11y__domain_a11y_explore_bar_chart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icons = packages__flutter__material.src__material__icons;
  const domain_a11y_explore_bar_chart = packages__example__a11y__domain_a11y_explore_bar_chart.a11y__domain_a11y_explore_bar_chart;
  const a11y_gallery = Object.create(dart.library);
  let VoidToDomainA11yExploreBarChart = () => (VoidToDomainA11yExploreBarChart = dart.constFn(dart.fnType(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 22,
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
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/example/a11y/a11y_gallery.dart"
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
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/example/a11y/a11y_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 26,
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
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/example/a11y/a11y_gallery.dart"
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
  a11y_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.accessibility, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Screen reader enabled bar chart", subtitle: "Requires TalkBack or Voiceover turned on to work. " + "Bar chart with domain selection explore mode behavior.", childBuilder: dart.fn(() => domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToDomainA11yExploreBarChart()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]);
  };
  dart.trackLibraries("packages/example/a11y/a11y_gallery", {
    "package:example/a11y/a11y_gallery.dart": a11y_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["a11y_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBE,UAAO,gCACD,wDACgB,kBAAW,0FACtB,6CACG,uDACN,wEACU,cAAU;EAG9B","file":"a11y_gallery.ddc.js"}');
  // Exports:
  return {
    a11y__a11y_gallery: a11y_gallery
  };
});

//# sourceMappingURL=a11y_gallery.ddc.js.map
