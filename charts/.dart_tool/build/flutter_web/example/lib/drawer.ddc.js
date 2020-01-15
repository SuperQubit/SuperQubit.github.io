define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const drawer = packages__flutter__material.src__material__drawer;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const checkbox = packages__flutter__material.src__material__checkbox;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const drawer$ = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 35,
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
        [_Location_column]: 24,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/example/drawer.dart"
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
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C11;
  let C10;
  let C19;
  let C18;
  let C17;
  let C22;
  let C21;
  let C20;
  const showPerformanceOverlay$ = dart.privateName(drawer$, "GalleryDrawer.showPerformanceOverlay");
  const onShowPerformanceOverlayChanged$ = dart.privateName(drawer$, "GalleryDrawer.onShowPerformanceOverlayChanged");
  drawer$.GalleryDrawer = class GalleryDrawer extends framework.StatelessWidget {
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get onShowPerformanceOverlayChanged() {
      return this[onShowPerformanceOverlayChanged$];
    }
    set onShowPerformanceOverlayChanged(value) {
      super.onShowPerformanceOverlayChanged = value;
    }
    build(context) {
      return new drawer.Drawer.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.assessment, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: new text.Text.new("Performance Overlay", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onTap: dart.fn(() => {
                this.onShowPerformanceOverlayChanged(!dart.test(this.showPerformanceOverlay));
              }, VoidToNull()), selected: this.showPerformanceOverlay, trailing: new checkbox.Checkbox.new({value: this.showPerformanceOverlay, onChanged: dart.fn(value => {
                  this.onShowPerformanceOverlayChanged(!dart.test(this.showPerformanceOverlay));
                }, boolToNull()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
  };
  (drawer$.GalleryDrawer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : null;
    let onShowPerformanceOverlayChanged = opts && 'onShowPerformanceOverlayChanged' in opts ? opts.onShowPerformanceOverlayChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[onShowPerformanceOverlayChanged$] = onShowPerformanceOverlayChanged;
    drawer$.GalleryDrawer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = drawer$.GalleryDrawer.prototype;
  dart.addTypeTests(drawer$.GalleryDrawer);
  dart.setMethodSignature(drawer$.GalleryDrawer, () => ({
    __proto__: dart.getMethods(drawer$.GalleryDrawer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(drawer$.GalleryDrawer, "package:example/drawer.dart");
  dart.setFieldSignature(drawer$.GalleryDrawer, () => ({
    __proto__: dart.getFields(drawer$.GalleryDrawer.__proto__),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    onShowPerformanceOverlayChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool]))
  }));
  dart.trackLibraries("packages/example/drawer", {
    "package:example/drawer.dart": drawer$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drawer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBa;;;;;;IACc;;;;;;UASC;AACxB,YAAW,+BACE,wCAA2B,sBAEhC,qCACW,kBAAW,uFACb,kBAAK,sFACT;AACmD,gBAAxD,qCAAgC,WAAC;0CAEzB,uCACI,kCACL,wCACI,QAAM;AACyC,kBAAxD,qCAAgC,WAAC;;IAM7C;;;QA1BS;QACA;QACA;;IADA;IACA;AACH,yDAAW,GAAG;;EAAC","file":"drawer.ddc.js"}');
  // Exports:
  return {
    drawer: drawer$
  };
});

//# sourceMappingURL=drawer.ddc.js.map
