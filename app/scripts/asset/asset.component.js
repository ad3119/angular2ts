System.register(['angular2/core', './asset.service', './../pipes/percentage.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, asset_service_1, percentage_pipe_1;
    var AssetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (asset_service_1_1) {
                asset_service_1 = asset_service_1_1;
            },
            function (percentage_pipe_1_1) {
                percentage_pipe_1 = percentage_pipe_1_1;
            }],
        execute: function() {
            AssetComponent = (function () {
                function AssetComponent(_assetServices) {
                    this._assetServices = _assetServices;
                    this.assetServiceLength = 0;
                    this.visible = true;
                }
                ;
                AssetComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                AssetComponent.prototype.getAssetService = function () {
                    var _this = this;
                    this._assetServices.getAssetServices().
                        then(function (tasks) { return _this.assetServices = tasks; }).then(function (tasks) { return _this.assetServiceLength = tasks.length; });
                    /*this._workflowService.getWorkflowTasks()
                                      .subscribe(
                                        wfservicestasks => this.workflowservices = wfservicestasks,
                                        error =>  this.errorMessage = <any>error);
                 */ };
                ;
                AssetComponent.prototype.ngOnInit = function () {
                    this.getAssetService();
                };
                AssetComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-service',
                        templateUrl: 'app/views/asset.component.html',
                        pipes: [percentage_pipe_1.percentagePipe],
                        styleUrls: ['app/css/panels.css'],
                        providers: [asset_service_1.AssetService]
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService])
                ], AssetComponent);
                return AssetComponent;
            })();
            exports_1("AssetComponent", AssetComponent);
        }
    }
});
//# sourceMappingURL=asset.component.js.map