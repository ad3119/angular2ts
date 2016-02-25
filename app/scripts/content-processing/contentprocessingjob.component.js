System.register(['angular2/core', './contentprocessingjob.service'], function(exports_1, context_1) {
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
    var core_1, contentprocessingjob_service_1;
    var ContentProcessingJobComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contentprocessingjob_service_1_1) {
                contentprocessingjob_service_1 = contentprocessingjob_service_1_1;
            }],
        execute: function() {
            ContentProcessingJobComponent = (function () {
                function ContentProcessingJobComponent(_contentProcessingJobService) {
                    this._contentProcessingJobService = _contentProcessingJobService;
                    this.visible = true;
                    this.contentProcessingJobsLength = 0;
                }
                ContentProcessingJobComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                ;
                ContentProcessingJobComponent.prototype.getContentProcessingJobs = function () {
                    var _this = this;
                    this._contentProcessingJobService.getContentProcessingJobs().
                        then(function (jobs) { return _this.contentProcessingJobs = jobs; }).then(function (jobs) { return _this.contentProcessingJobsLength = jobs.length; });
                };
                ;
                ContentProcessingJobComponent.prototype.ngOnInit = function () {
                    this.getContentProcessingJobs();
                };
                ContentProcessingJobComponent = __decorate([
                    core_1.Component({
                        selector: 'contentprocessingjob',
                        templateUrl: 'app/views/contentprocessingjob.component.html',
                        styleUrls: ['app/css/panels.css'],
                        providers: [contentprocessingjob_service_1.ContentProcessingJobService]
                    }), 
                    __metadata('design:paramtypes', [contentprocessingjob_service_1.ContentProcessingJobService])
                ], ContentProcessingJobComponent);
                return ContentProcessingJobComponent;
            }());
            exports_1("ContentProcessingJobComponent", ContentProcessingJobComponent);
        }
    }
});
//# sourceMappingURL=contentprocessingjob.component.js.map