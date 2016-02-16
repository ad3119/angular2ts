System.register(['angular2/core', 'angular2/router', 'angular2/http', './../dashboard/dashboard.component', './../workflow/workflow.component', './../asset/asset.component', './../distribution/distribution.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, dashboard_component_1, workflow_component_1, asset_component_1, distribution_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (workflow_component_1_1) {
                workflow_component_1 = workflow_component_1_1;
            },
            function (asset_component_1_1) {
                asset_component_1 = asset_component_1_1;
            },
            function (distribution_component_1_1) {
                distribution_component_1 = distribution_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.title = 'Tour of Heroes';
                    this.searchVisible = false;
                    location.go(location.path());
                }
                AppComponent.prototype.toggle = function () {
                    console.log('Hi , I am in');
                    this.searchVisible = !this.searchVisible;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/views/app.component.html',
                        styleUrls: ['app/css/navigation.css', 'app/css/footer.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/workflow', name: 'Workflow', component: workflow_component_1.WorkflowComponent },
                        { path: '/asset', name: 'Asset', component: asset_component_1.AssetComponent },
                        { path: '/distribution', name: 'Distribution', component: distribution_component_1.DistributionComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map