System.register(['angular2/core', './../workflow/workflow.component', './../distribution/distribution.component', './../asset/asset.component', './../dropbox/dropbox.component', './../ttvqueue/ttvqueue.component', './../content-processing/contentprocessingjob.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, workflow_component_1, distribution_component_1, asset_component_1, dropbox_component_1, ttvqueue_component_1, contentprocessingjob_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workflow_component_1_1) {
                workflow_component_1 = workflow_component_1_1;
            },
            function (distribution_component_1_1) {
                distribution_component_1 = distribution_component_1_1;
            },
            function (asset_component_1_1) {
                asset_component_1 = asset_component_1_1;
            },
            function (dropbox_component_1_1) {
                dropbox_component_1 = dropbox_component_1_1;
            },
            function (ttvqueue_component_1_1) {
                ttvqueue_component_1 = ttvqueue_component_1_1;
            },
            function (contentprocessingjob_component_1_1) {
                contentprocessingjob_component_1 = contentprocessingjob_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                    this.name = 'Arjun!!';
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/views/dashboard.component.html',
                        directives: [workflow_component_1.WorkflowComponent, distribution_component_1.DistributionComponent, asset_component_1.AssetComponent, dropbox_component_1.DropboxComponent, ttvqueue_component_1.TTVQueueComponent, contentprocessingjob_component_1.ContentProcessingJobComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map