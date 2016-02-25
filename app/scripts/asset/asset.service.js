System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var AssetService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            /*import {RequestCredentials} from 'angular2/src/http/enums';*/
            AssetService = (function () {
                function AssetService(http) {
                    /*let _build = http._backend._browserXHR.build;
                      ttp._backend._browserXHR.build = () => {
                       let _xhr =  _build();
                      _xhr.withCredentials = true;
                      return _xhr;
                    };*/
                    this.http = http;
                    //_assetServicesUrl = 'http://172.31.153.66:8080/rest/dojo/eam/asset/assets?filterColumns=comment%2CwarningCount&dateIngestedGE=2007-12-08%2000%3A00%3A00&sort=licensingWindowStart&start=15&count=15';
                    this._assetServicesUrl = 'app/scripts/asset/people.json';
                    this.result = [];
                }
                //private header: Headers;
                AssetService.prototype.getAssetServices = function () {
                    //return Promise.resolve(ASSETS); console.log("Yay !! I got it done through http");
                    var header = new http_1.Headers();
                    //header.append("TCookie", "JSESSIONID=40101848F3BD9A4D4593962C068ECA72"); 
                    header.append("Content-Type", "application/json");
                    return this.http.get(this._assetServicesUrl /*,  {headers:header}*/).map(function (res) {
                        return res.json().items;
                    }).catch(this.handleError);
                };
                ;
                AssetService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AssetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AssetService);
                return AssetService;
            }());
            exports_1("AssetService", AssetService);
        }
    }
});
//# sourceMappingURL=asset.service.js.map