System.register(['angular2/core', './dropbox.service', './../pipes/percentage.pipe'], function(exports_1, context_1) {
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
    var core_1, dropbox_service_1, percentage_pipe_1;
    var DropboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dropbox_service_1_1) {
                dropbox_service_1 = dropbox_service_1_1;
            },
            function (percentage_pipe_1_1) {
                percentage_pipe_1 = percentage_pipe_1_1;
            }],
        execute: function() {
            DropboxComponent = (function () {
                function DropboxComponent(_dropboxService) {
                    this._dropboxService = _dropboxService;
                    this.visible = true;
                }
                ;
                DropboxComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                DropboxComponent.prototype.getDropboxService = function () {
                    var _this = this;
                    this._dropboxService.getdropboxServices().then(function (tasks) { return _this.Dropboxes = tasks; });
                    /*this._workflowService.getWorkflowTasks()
                                      .subscribe(
                                        wfservicestasks => this.workflowservices = wfservicestasks,
                                        error =>  this.errorMessage = <any>error);
                 */ };
                ;
                DropboxComponent.prototype.ngOnInit = function () {
                    this.getDropboxService();
                };
                DropboxComponent = __decorate([
                    core_1.Component({
                        selector: 'dropbox',
                        templateUrl: 'app/views/dropbox.component.html',
                        pipes: [percentage_pipe_1.percentagePipe],
                        styleUrls: ['app/css/panels.css'],
                        providers: [dropbox_service_1.DropboxService]
                    }), 
                    __metadata('design:paramtypes', [dropbox_service_1.DropboxService])
                ], DropboxComponent);
                return DropboxComponent;
            }());
            exports_1("DropboxComponent", DropboxComponent);
        }
    }
});
//# sourceMappingURL=dropbox.component.js.map