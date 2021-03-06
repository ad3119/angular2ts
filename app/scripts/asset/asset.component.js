System.register(['angular2/core', 'angular2/http', './asset.service', './../pipes/percentage.pipe', './../pipes/status', './../pipes/search.pipe', './../browser-request/customXhr', './../pipes/Sorter'], function(exports_1, context_1) {
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
    var core_1, http_1, asset_service_1, percentage_pipe_1, status_1, search_pipe_1, customXhr_1, Sorter_1;
    var AssetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (asset_service_1_1) {
                asset_service_1 = asset_service_1_1;
            },
            function (percentage_pipe_1_1) {
                percentage_pipe_1 = percentage_pipe_1_1;
            },
            function (status_1_1) {
                status_1 = status_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (customXhr_1_1) {
                customXhr_1 = customXhr_1_1;
            },
            function (Sorter_1_1) {
                Sorter_1 = Sorter_1_1;
            }],
        execute: function() {
            AssetComponent = (function () {
                function AssetComponent(_assetServices) {
                    this._assetServices = _assetServices;
                    this.search_text = "";
                    this.assetServiceLength = 0;
                    this.sortedColumn = "assetId";
                    this.sortAsc = false;
                    /*sortIcon(key) {
                      console.log(key);
                      if (this.sortedColumn == key) return true;
                      return false;
                    }*/
                    this.visible = true;
                    this.sorter = new Sorter_1.Sorter();
                }
                ;
                AssetComponent.prototype.sort = function (key) {
                    this.sorter.sort(key, this.assetServices);
                    this.sortedColumn = key;
                    if (key == this.sortedColumn) {
                        this.sortAsc = !this.sortAsc;
                    }
                    else {
                        this.sortAsc = false;
                    }
                };
                AssetComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                AssetComponent.prototype.getAssetService = function () {
                    var _this = this;
                    /*this._assetServices.getAssetServices().
                    then(tasks => this.assetServices = tasks).then(tasks => this.assetServiceLength = tasks.length;)
                    */
                    this._assetServices.getAssetServices().subscribe(function (tasks) { return _this.assetServices = tasks; }, function (error) { return _this.errorMessage = error; });
                };
                ;
                AssetComponent.prototype.ngOnInit = function () {
                    this.getAssetService();
                };
                AssetComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-service',
                        templateUrl: 'app/views/asset.component.html',
                        pipes: [percentage_pipe_1.percentagePipe, status_1.statusPipe, search_pipe_1.SearchPipe],
                        styleUrls: ['app/css/panels.css'],
                        providers: [asset_service_1.AssetService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS, customXhr_1.MyBaseRequestOptions]
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService])
                ], AssetComponent);
                return AssetComponent;
            }());
            exports_1("AssetComponent", AssetComponent);
        }
    }
});
//# sourceMappingURL=asset.component.js.map