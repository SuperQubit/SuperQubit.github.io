define(['dart_sdk', 'packages/flutter/material'], function(dart_sdk, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const app_config = Object.create(dart.library);
  const CT = Object.create(null);
  const appName$ = dart.privateName(app_config, "AppConfig.appName");
  const appLink$ = dart.privateName(app_config, "AppConfig.appLink");
  const theme$ = dart.privateName(app_config, "AppConfig.theme");
  const showPerformanceOverlay$ = dart.privateName(app_config, "AppConfig.showPerformanceOverlay");
  app_config.AppConfig = class AppConfig extends core.Object {
    get appName() {
      return this[appName$];
    }
    set appName(value) {
      super.appName = value;
    }
    get appLink() {
      return this[appLink$];
    }
    set appLink(value) {
      super.appLink = value;
    }
    get theme() {
      return this[theme$];
    }
    set theme(value) {
      super.theme = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
  };
  (app_config.AppConfig.new = function(opts) {
    let appName = opts && 'appName' in opts ? opts.appName : null;
    let appLink = opts && 'appLink' in opts ? opts.appLink : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : null;
    this[appName$] = appName;
    this[appLink$] = appLink;
    this[theme$] = theme;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    ;
  }).prototype = app_config.AppConfig.prototype;
  dart.addTypeTests(app_config.AppConfig);
  dart.setLibraryUri(app_config.AppConfig, "package:example/app_config.dart");
  dart.setFieldSignature(app_config.AppConfig, () => ({
    __proto__: dart.getFields(app_config.AppConfig.__proto__),
    appName: dart.finalFieldType(core.String),
    appLink: dart.finalFieldType(core.String),
    theme: dart.finalFieldType(theme_data.ThemeData),
    showPerformanceOverlay: dart.finalFieldType(core.bool)
  }));
  dart.copyProperties(app_config, {
    get defaultConfig() {
      return new app_config.AppConfig.new({appName: "Charts Gallery", appLink: "", theme: theme_data.ThemeData.new({brightness: ui.Brightness.light, primarySwatch: colors.Colors.lightBlue}), showPerformanceOverlay: false});
    }
  });
  dart.trackLibraries("packages/example/app_config", {
    "package:example/app_config.dart": app_config
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_config.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAmBe;;;;;;IACA;;;;;;IACG;;;;;;IACL;;;;;;;;QAGD;QAAc;QAAc;QAAY;IAAxC;IAAc;IAAc;IAAY;;EAAwB;;;;;;;;;;;;AAK1E,YAAW,wCACA,2BACA,WACE,sCACc,oCACD,mDAEA;IAE5B","file":"app_config.ddc.js"}');
  // Exports:
  return {
    app_config: app_config
  };
});

//# sourceMappingURL=app_config.ddc.js.map
