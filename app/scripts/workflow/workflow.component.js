System.register(['angular2/core', './workflow.service'], function(exports_1, context_1) {
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
    var core_1, workflow_service_1;
    var WorkflowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workflow_service_1_1) {
                workflow_service_1 = workflow_service_1_1;
            }],
        execute: function() {
            WorkflowComponent = (function () {
                function WorkflowComponent(_workflowService) {
                    this._workflowService = _workflowService;
                    this.wftasksLength = 0;
                    this.visible = true;
                    this.theads = ['Tasks', 'Warning', 'In Progress', 'Falied'];
                }
                ;
                WorkflowComponent.prototype.getWorkflowTasks = function () {
                    var _this = this;
                    this._workflowService.getWorkflowTasks().
                        then(function (wfservicestasks) { return _this.workflowservices = wfservicestasks; }).then(function (wfservicestasks) { return _this.wftasksLength = wfservicestasks.length; });
                    /*this._workflowService.getWorkflowTasks()
                                      .subscribe(
                                        wfservicestasks => this.workflowservices = wfservicestasks,
                                        error =>  this.errorMessage = <any>error);
                 */ };
                ;
                WorkflowComponent.prototype.ngOnInit = function () {
                    this.getWorkflowTasks();
                };
                ;
                WorkflowComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                WorkflowComponent = __decorate([
                    core_1.Component({
                        selector: 'workflow-service',
                        templateUrl: 'app/views/workflow.component.html',
                        styleUrls: ['app/css/panels.css'],
                        providers: [workflow_service_1.WorkFlowTasksService]
                    }), 
                    __metadata('design:paramtypes', [workflow_service_1.WorkFlowTasksService])
                ], WorkflowComponent);
                return WorkflowComponent;
            }());
            exports_1("WorkflowComponent", WorkflowComponent);
        }
    }
});
//# sourceMappingURL=workflow.component.js.map