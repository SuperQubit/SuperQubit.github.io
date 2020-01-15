define(['dart_sdk', 'packages/example/gallery_scaffold', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/example/scatter_plot_chart/simple', 'packages/example/scatter_plot_chart/shapes', 'packages/example/scatter_plot_chart/comparison_points', 'packages/example/scatter_plot_chart/animation_zoom', 'packages/example/scatter_plot_chart/bucketing_axis'], function(dart_sdk, packages__example__gallery_scaffold, packages__flutter__src__widgets__actions, packages__flutter__material, packages__example__scatter_plot_chart__simple, packages__example__scatter_plot_chart__shapes, packages__example__scatter_plot_chart__comparison_points, packages__example__scatter_plot_chart__animation_zoom, packages__example__scatter_plot_chart__bucketing_axis) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icons = packages__flutter__material.src__material__icons;
  const simple = packages__example__scatter_plot_chart__simple.scatter_plot_chart__simple;
  const shapes = packages__example__scatter_plot_chart__shapes.scatter_plot_chart__shapes;
  const comparison_points = packages__example__scatter_plot_chart__comparison_points.scatter_plot_chart__comparison_points;
  const animation_zoom = packages__example__scatter_plot_chart__animation_zoom.scatter_plot_chart__animation_zoom;
  const bucketing_axis = packages__example__scatter_plot_chart__bucketing_axis.scatter_plot_chart__bucketing_axis;
  const scatter_plot_gallery = Object.create(dart.library);
  let VoidToSimpleScatterPlotChart = () => (VoidToSimpleScatterPlotChart = dart.constFn(dart.fnType(simple.SimpleScatterPlotChart, [])))();
  let VoidToShapesScatterPlotChart = () => (VoidToShapesScatterPlotChart = dart.constFn(dart.fnType(shapes.ShapesScatterPlotChart, [])))();
  let VoidToComparisonPointsScatterPlotChart = () => (VoidToComparisonPointsScatterPlotChart = dart.constFn(dart.fnType(comparison_points.ComparisonPointsScatterPlotChart, [])))();
  let VoidToScatterPlotAnimationZoomChart = () => (VoidToScatterPlotAnimationZoomChart = dart.constFn(dart.fnType(animation_zoom.ScatterPlotAnimationZoomChart, [])))();
  let VoidToBucketingAxisScatterPlotChart = () => (VoidToBucketingAxisScatterPlotChart = dart.constFn(dart.fnType(bucketing_axis.BucketingAxisScatterPlotChart, [])))();
  let JSArrayOfGalleryScaffold = () => (JSArrayOfGalleryScaffold = dart.constFn(_interceptors.JSArray$(gallery_scaffold.GalleryScaffold)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 27,
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
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
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
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 30,
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
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 33,
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 36,
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
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 39,
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 42,
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
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 45,
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
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 48,
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
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 51,
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
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listTileIcon",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childBuilder",
        [_Location_column]: 7,
        [_Location_line]: 55,
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
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/scatter_plot_gallery.dart"
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
  scatter_plot_gallery.buildGallery = function buildGallery() {
    return JSArrayOfGalleryScaffold().of([new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.scatter_plot, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: "Simple Scatter Plot Chart", subtitle: "With a single series", childBuilder: dart.fn(() => simple.SimpleScatterPlotChart.withRandomData({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), VoidToSimpleScatterPlotChart()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.scatter_plot, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: "Shapes Scatter Plot Chart", subtitle: "With custom shapes", childBuilder: dart.fn(() => shapes.ShapesScatterPlotChart.withRandomData({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), VoidToShapesScatterPlotChart()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.scatter_plot, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), title: "Comparison Points Scatter Plot Chart", subtitle: "Scatter plot chart with comparison points", childBuilder: dart.fn(() => comparison_points.ComparisonPointsScatterPlotChart.withRandomData({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), VoidToComparisonPointsScatterPlotChart()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.scatter_plot, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), title: "Pan and Zoom Scatter Plot Chart", subtitle: "Simple scatter plot chart pan and zoom behaviors enabled", childBuilder: dart.fn(() => animation_zoom.ScatterPlotAnimationZoomChart.withRandomData({$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), VoidToScatterPlotAnimationZoomChart()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new gallery_scaffold.GalleryScaffold.new({listTileIcon: new icon.Icon.new(icons.Icons.scatter_plot, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), title: "Bucketing Axis Scatter Plot Chart", subtitle: "Scatter plot with a measure axis that buckets values less " + "than 10% into a single region below the draw area", childBuilder: dart.fn(() => bucketing_axis.BucketingAxisScatterPlotChart.withRandomData({$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), VoidToBucketingAxisScatterPlotChart()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45})]);
  };
  dart.trackLibraries("packages/example/scatter_plot_chart/scatter_plot_gallery", {
    "package:example/scatter_plot_chart/scatter_plot_gallery.dart": scatter_plot_gallery
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scatter_plot_gallery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBE,UAAO,gCACD,wDACgB,kBAAW,yFACtB,uCACG,sCACI,cAAU,6LAEtB,wDACgB,kBAAW,2FACtB,uCACG,oCACI,cAAU,iMAEtB,wDACgB,kBAAW,2FACtB,kDACG,2DACI,cAAU,gOAEtB,wDACgB,kBAAW,2FACtB,6CACG,0EACI,cAAU,uNAEtB,wDACgB,kBAAW,2FACtB,+CACG,AAA6D,+DACnE,mEACU,cAAU;EAG9B","file":"scatter_plot_gallery.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__scatter_plot_gallery: scatter_plot_gallery
  };
});

//# sourceMappingURL=scatter_plot_gallery.ddc.js.map
