System.register(['angular2/core', './distribution.service'], function(exports_1, context_1) {
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
    var core_1, distribution_service_1;
    var DistributionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (distribution_service_1_1) {
                distribution_service_1 = distribution_service_1_1;
            }],
        execute: function() {
            DistributionComponent = (function () {
                function DistributionComponent(_distributionService) {
                    this._distributionService = _distributionService;
                    this.distrubtionTasksLength = 0;
                    this.visible = true;
                }
                ;
                DistributionComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                DistributionComponent.prototype.getDistributionTasks = function () {
                    var _this = this;
                    this._distributionService.getDistributionTasks().
                        then(function (tasks) { return _this.distributionServices = tasks; }).then(function (tasks) { return _this.distrubtionTasksLength = tasks.length; });
                    /*this._workflowService.getWorkflowTasks()
                                      .subscribe(
                                        wfservicestasks => this.workflowservices = wfservicestasks,
                                        error =>  this.errorMessage = <any>error);
                 */ };
                ;
                DistributionComponent.prototype.ngOnInit = function () {
                    this.getDistributionTasks();
                };
                DistributionComponent = __decorate([
                    core_1.Component({
                        selector: 'distribution-service',
                        templateUrl: 'app/views/distribution.component.html',
                        styleUrls: ['app/css/panels.css'],
                        providers: [distribution_service_1.DistributionService]
                    }), 
                    __metadata('design:paramtypes', [distribution_service_1.DistributionService])
                ], DistributionComponent);
                return DistributionComponent;
            }());
            exports_1("DistributionComponent", DistributionComponent);
        }
    }
});
//# sourceMappingURL=distribution.component.js.map