System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './app.component', 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'angular2/src/http/base_request_options'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var browser_1, core_1, router_1, app_component_1, http_1, base_request_options_1;
    var MyBaseRequestOptions;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (base_request_options_1_1) {
                base_request_options_1 = base_request_options_1_1;
            }],
        execute: function() {
            MyBaseRequestOptions = (function (_super) {
                __extends(MyBaseRequestOptions, _super);
                function MyBaseRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    this.withCredentials = true;
                }
                return MyBaseRequestOptions;
            }(base_request_options_1.BaseRequestOptions));
            //bootstrap( AppComponent, [ provide(RequestOptions, {useClass: MyBaseRequestOptions}) ] );
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), core_1.provide(base_request_options_1.RequestOptions, { useClass: MyBaseRequestOptions })]);
        }
    }
});
//# sourceMappingURL=main.js.map