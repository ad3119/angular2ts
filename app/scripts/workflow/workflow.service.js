System.register(['angular2/http', './mock-workflow.tasks', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var http_1, mock_workflow_tasks_1, core_1, Observable_1;
    var WorkFlowTasksService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_workflow_tasks_1_1) {
                mock_workflow_tasks_1 = mock_workflow_tasks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WorkFlowTasksService = (function () {
                function WorkFlowTasksService(http) {
                    this.http = http;
                    this._workflowServicesUrl = 'app/scripts/workflow/mock-workflow.tasks';
                }
                WorkFlowTasksService.prototype.getWorkflowTasks = function () {
                    // console.log("Yay !!! Some function called me :) " , Promise.resolve(WORKFLOWS));
                    return Promise.resolve(mock_workflow_tasks_1.WORKFLOWS);
                    /*console.log("Yay !! I got it done through http")
                    return this.http.get(this._workflowServicesUrl)
                                    .map(res => <Workflow[]> res.json().data)
                                    .catch(this.handleError);*/
                };
                ;
                // See the "Take it slow" appendix
                WorkFlowTasksService.prototype.getWorkflowTasksSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_workflow_tasks_1.WORKFLOWS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                WorkFlowTasksService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WorkFlowTasksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WorkFlowTasksService);
                return WorkFlowTasksService;
            }());
            exports_1("WorkFlowTasksService", WorkFlowTasksService);
        }
    }
});
//# sourceMappingURL=workflow.service.js.map