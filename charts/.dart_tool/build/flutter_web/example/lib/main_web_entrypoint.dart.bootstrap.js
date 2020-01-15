/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/charts_common/common": "packages/charts_common/common.ddc",
 "packages/charts_flutter/flutter": "packages/charts_flutter/flutter.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/example/a11y/a11y_gallery": "packages/example/a11y/a11y_gallery.ddc",
 "packages/example/a11y/domain_a11y_explore_bar_chart": "packages/example/a11y/domain_a11y_explore_bar_chart.ddc",
 "packages/example/app_config": "packages/example/app_config.ddc",
 "packages/example/axes/axes_gallery": "packages/example/axes/axes_gallery.ddc",
 "packages/example/axes/bar_secondary_axis": "packages/example/axes/bar_secondary_axis.ddc",
 "packages/example/axes/bar_secondary_axis_only": "packages/example/axes/bar_secondary_axis_only.ddc",
 "packages/example/axes/custom_axis_tick_formatters": "packages/example/axes/custom_axis_tick_formatters.ddc",
 "packages/example/axes/custom_font_size_and_color": "packages/example/axes/custom_font_size_and_color.ddc",
 "packages/example/axes/custom_measure_tick_count": "packages/example/axes/custom_measure_tick_count.ddc",
 "packages/example/axes/gridline_dash_pattern": "packages/example/axes/gridline_dash_pattern.ddc",
 "packages/example/axes/hidden_ticks_and_labels_axis": "packages/example/axes/hidden_ticks_and_labels_axis.ddc",
 "packages/example/axes/horizontal_bar_secondary_axis": "packages/example/axes/horizontal_bar_secondary_axis.ddc",
 "packages/example/axes/integer_only_measure_axis": "packages/example/axes/integer_only_measure_axis.ddc",
 "packages/example/axes/line_disjoint_axis": "packages/example/axes/line_disjoint_axis.ddc",
 "packages/example/axes/measure_axis_label_alignment": "packages/example/axes/measure_axis_label_alignment.ddc",
 "packages/example/axes/nonzero_bound_measure_axis": "packages/example/axes/nonzero_bound_measure_axis.ddc",
 "packages/example/axes/numeric_initial_viewport": "packages/example/axes/numeric_initial_viewport.ddc",
 "packages/example/axes/ordinal_initial_viewport": "packages/example/axes/ordinal_initial_viewport.ddc",
 "packages/example/axes/short_tick_length_axis": "packages/example/axes/short_tick_length_axis.ddc",
 "packages/example/axes/statically_provided_ticks": "packages/example/axes/statically_provided_ticks.ddc",
 "packages/example/bar_chart/bar_gallery": "packages/example/bar_chart/bar_gallery.ddc",
 "packages/example/bar_chart/custom_rounded_bars": "packages/example/bar_chart/custom_rounded_bars.ddc",
 "packages/example/bar_chart/grouped": "packages/example/bar_chart/grouped.ddc",
 "packages/example/bar_chart/grouped_fill_color": "packages/example/bar_chart/grouped_fill_color.ddc",
 "packages/example/bar_chart/grouped_single_target_line": "packages/example/bar_chart/grouped_single_target_line.ddc",
 "packages/example/bar_chart/grouped_stacked": "packages/example/bar_chart/grouped_stacked.ddc",
 "packages/example/bar_chart/grouped_stacked_weight_pattern": "packages/example/bar_chart/grouped_stacked_weight_pattern.ddc",
 "packages/example/bar_chart/grouped_target_line": "packages/example/bar_chart/grouped_target_line.ddc",
 "packages/example/bar_chart/horizontal": "packages/example/bar_chart/horizontal.ddc",
 "packages/example/bar_chart/horizontal_bar_label": "packages/example/bar_chart/horizontal_bar_label.ddc",
 "packages/example/bar_chart/horizontal_bar_label_custom": "packages/example/bar_chart/horizontal_bar_label_custom.ddc",
 "packages/example/bar_chart/horizontal_pattern_forward_hatch": "packages/example/bar_chart/horizontal_pattern_forward_hatch.ddc",
 "packages/example/bar_chart/pattern_forward_hatch": "packages/example/bar_chart/pattern_forward_hatch.ddc",
 "packages/example/bar_chart/simple": "packages/example/bar_chart/simple.ddc",
 "packages/example/bar_chart/spark_bar": "packages/example/bar_chart/spark_bar.ddc",
 "packages/example/bar_chart/stacked": "packages/example/bar_chart/stacked.ddc",
 "packages/example/bar_chart/stacked_fill_color": "packages/example/bar_chart/stacked_fill_color.ddc",
 "packages/example/bar_chart/stacked_horizontal": "packages/example/bar_chart/stacked_horizontal.ddc",
 "packages/example/bar_chart/stacked_target_line": "packages/example/bar_chart/stacked_target_line.ddc",
 "packages/example/behaviors/behaviors_gallery": "packages/example/behaviors/behaviors_gallery.ddc",
 "packages/example/behaviors/chart_title": "packages/example/behaviors/chart_title.ddc",
 "packages/example/behaviors/initial_hint_animation": "packages/example/behaviors/initial_hint_animation.ddc",
 "packages/example/behaviors/initial_selection": "packages/example/behaviors/initial_selection.ddc",
 "packages/example/behaviors/percent_of_domain": "packages/example/behaviors/percent_of_domain.ddc",
 "packages/example/behaviors/percent_of_domain_by_category": "packages/example/behaviors/percent_of_domain_by_category.ddc",
 "packages/example/behaviors/percent_of_series": "packages/example/behaviors/percent_of_series.ddc",
 "packages/example/behaviors/selection_bar_highlight": "packages/example/behaviors/selection_bar_highlight.ddc",
 "packages/example/behaviors/selection_callback_example": "packages/example/behaviors/selection_callback_example.ddc",
 "packages/example/behaviors/selection_line_highlight": "packages/example/behaviors/selection_line_highlight.ddc",
 "packages/example/behaviors/selection_line_highlight_custom_shape": "packages/example/behaviors/selection_line_highlight_custom_shape.ddc",
 "packages/example/behaviors/selection_scatter_plot_highlight": "packages/example/behaviors/selection_scatter_plot_highlight.ddc",
 "packages/example/behaviors/selection_user_managed": "packages/example/behaviors/selection_user_managed.ddc",
 "packages/example/behaviors/slider": "packages/example/behaviors/slider.ddc",
 "packages/example/behaviors/sliding_viewport_on_selection": "packages/example/behaviors/sliding_viewport_on_selection.ddc",
 "packages/example/combo_chart/combo_gallery": "packages/example/combo_chart/combo_gallery.ddc",
 "packages/example/combo_chart/date_time_line_point": "packages/example/combo_chart/date_time_line_point.ddc",
 "packages/example/combo_chart/numeric_line_bar": "packages/example/combo_chart/numeric_line_bar.ddc",
 "packages/example/combo_chart/numeric_line_point": "packages/example/combo_chart/numeric_line_point.ddc",
 "packages/example/combo_chart/ordinal_bar_line": "packages/example/combo_chart/ordinal_bar_line.ddc",
 "packages/example/combo_chart/scatter_plot_line": "packages/example/combo_chart/scatter_plot_line.ddc",
 "packages/example/drawer": "packages/example/drawer.ddc",
 "packages/example/gallery_scaffold": "packages/example/gallery_scaffold.ddc",
 "packages/example/home": "packages/example/home.ddc",
 "packages/example/i18n/i18n_gallery": "packages/example/i18n/i18n_gallery.ddc",
 "packages/example/i18n/rtl_bar_chart": "packages/example/i18n/rtl_bar_chart.ddc",
 "packages/example/i18n/rtl_line_chart": "packages/example/i18n/rtl_line_chart.ddc",
 "packages/example/i18n/rtl_line_segments": "packages/example/i18n/rtl_line_segments.ddc",
 "packages/example/i18n/rtl_series_legend": "packages/example/i18n/rtl_series_legend.ddc",
 "packages/example/legends/datum_legend_options": "packages/example/legends/datum_legend_options.ddc",
 "packages/example/legends/datum_legend_with_measures": "packages/example/legends/datum_legend_with_measures.ddc",
 "packages/example/legends/default_hidden_series_legend": "packages/example/legends/default_hidden_series_legend.ddc",
 "packages/example/legends/legend_custom_symbol": "packages/example/legends/legend_custom_symbol.ddc",
 "packages/example/legends/legends_gallery": "packages/example/legends/legends_gallery.ddc",
 "packages/example/legends/series_legend_options": "packages/example/legends/series_legend_options.ddc",
 "packages/example/legends/series_legend_with_measures": "packages/example/legends/series_legend_with_measures.ddc",
 "packages/example/legends/simple_datum_legend": "packages/example/legends/simple_datum_legend.ddc",
 "packages/example/legends/simple_series_legend": "packages/example/legends/simple_series_legend.ddc",
 "packages/example/line_chart/animation_zoom": "packages/example/line_chart/animation_zoom.ddc",
 "packages/example/line_chart/area_and_line": "packages/example/line_chart/area_and_line.ddc",
 "packages/example/line_chart/dash_pattern": "packages/example/line_chart/dash_pattern.ddc",
 "packages/example/line_chart/line_annotation": "packages/example/line_chart/line_annotation.ddc",
 "packages/example/line_chart/line_gallery": "packages/example/line_chart/line_gallery.ddc",
 "packages/example/line_chart/points": "packages/example/line_chart/points.ddc",
 "packages/example/line_chart/range_annotation": "packages/example/line_chart/range_annotation.ddc",
 "packages/example/line_chart/range_annotation_margin": "packages/example/line_chart/range_annotation_margin.ddc",
 "packages/example/line_chart/segments": "packages/example/line_chart/segments.ddc",
 "packages/example/line_chart/simple": "packages/example/line_chart/simple.ddc",
 "packages/example/line_chart/simple_nulls": "packages/example/line_chart/simple_nulls.ddc",
 "packages/example/line_chart/stacked_area": "packages/example/line_chart/stacked_area.ddc",
 "packages/example/line_chart/stacked_area_custom_color": "packages/example/line_chart/stacked_area_custom_color.ddc",
 "packages/example/line_chart/stacked_area_nulls": "packages/example/line_chart/stacked_area_nulls.ddc",
 "packages/example/main": "packages/example/main.ddc",
 "packages/example/main_web_entrypoint": "packages/example/main_web_entrypoint.ddc",
 "packages/example/pie_chart/auto_label": "packages/example/pie_chart/auto_label.ddc",
 "packages/example/pie_chart/donut": "packages/example/pie_chart/donut.ddc",
 "packages/example/pie_chart/gauge": "packages/example/pie_chart/gauge.ddc",
 "packages/example/pie_chart/outside_label": "packages/example/pie_chart/outside_label.ddc",
 "packages/example/pie_chart/partial_pie": "packages/example/pie_chart/partial_pie.ddc",
 "packages/example/pie_chart/pie_gallery": "packages/example/pie_chart/pie_gallery.ddc",
 "packages/example/pie_chart/simple": "packages/example/pie_chart/simple.ddc",
 "packages/example/scatter_plot_chart/animation_zoom": "packages/example/scatter_plot_chart/animation_zoom.ddc",
 "packages/example/scatter_plot_chart/bucketing_axis": "packages/example/scatter_plot_chart/bucketing_axis.ddc",
 "packages/example/scatter_plot_chart/comparison_points": "packages/example/scatter_plot_chart/comparison_points.ddc",
 "packages/example/scatter_plot_chart/scatter_plot_gallery": "packages/example/scatter_plot_chart/scatter_plot_gallery.ddc",
 "packages/example/scatter_plot_chart/shapes": "packages/example/scatter_plot_chart/shapes.ddc",
 "packages/example/scatter_plot_chart/simple": "packages/example/scatter_plot_chart/simple.ddc",
 "packages/example/time_series_chart/confidence_interval": "packages/example/time_series_chart/confidence_interval.ddc",
 "packages/example/time_series_chart/end_points_axis": "packages/example/time_series_chart/end_points_axis.ddc",
 "packages/example/time_series_chart/line_annotation": "packages/example/time_series_chart/line_annotation.ddc",
 "packages/example/time_series_chart/range_annotation": "packages/example/time_series_chart/range_annotation.ddc",
 "packages/example/time_series_chart/range_annotation_margin": "packages/example/time_series_chart/range_annotation_margin.ddc",
 "packages/example/time_series_chart/simple": "packages/example/time_series_chart/simple.ddc",
 "packages/example/time_series_chart/symbol_annotation": "packages/example/time_series_chart/symbol_annotation.ddc",
 "packages/example/time_series_chart/time_series_gallery": "packages/example/time_series_chart/time_series_gallery.ddc",
 "packages/example/time_series_chart/with_bar_renderer": "packages/example/time_series_chart/with_bar_renderer.ddc",
 "packages/flutter/animation": "packages/flutter/animation.ddc",
 "packages/flutter/cupertino": "packages/flutter/cupertino.ddc",
 "packages/flutter/foundation": "packages/flutter/foundation.ddc",
 "packages/flutter/gestures": "packages/flutter/gestures.ddc",
 "packages/flutter/material": "packages/flutter/material.ddc",
 "packages/flutter/painting": "packages/flutter/painting.ddc",
 "packages/flutter/physics": "packages/flutter/physics.ddc",
 "packages/flutter/rendering": "packages/flutter/rendering.ddc",
 "packages/flutter/semantics": "packages/flutter/semantics.ddc",
 "packages/flutter/src/animation/animation": "packages/flutter/src/animation/animation.ddc",
 "packages/flutter/src/cupertino/action_sheet": "packages/flutter/src/cupertino/action_sheet.ddc",
 "packages/flutter/src/foundation/_bitfield_web": "packages/flutter/src/foundation/_bitfield_web.ddc",
 "packages/flutter/src/gestures/arena": "packages/flutter/src/gestures/arena.ddc",
 "packages/flutter/src/painting/_network_image_web": "packages/flutter/src/painting/_network_image_web.ddc",
 "packages/flutter/src/physics/clamped_simulation": "packages/flutter/src/physics/clamped_simulation.ddc",
 "packages/flutter/src/rendering/animated_size": "packages/flutter/src/rendering/animated_size.ddc",
 "packages/flutter/src/semantics/binding": "packages/flutter/src/semantics/binding.ddc",
 "packages/flutter/src/widgets/actions": "packages/flutter/src/widgets/actions.ddc",
 "packages/flutter/widgets": "packages/flutter/widgets.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/vector_math/hash": "packages/vector_math/hash.ddc",
 "packages/vector_math/vector_math": "packages/vector_math/vector_math.ddc",
 "packages/vector_math/vector_math_64": "packages/vector_math/vector_math_64.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'main_web_entrypoint.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main_web_entrypoint.dart.bootstrap", ["packages/example/main_web_entrypoint", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.lib__main_web_entrypoint || app.main_web_entrypoint).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "package:example/main_web_entrypoint.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main_web_entrypoint.dart.bootstrap", {
    "main_web_entrypoint.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
