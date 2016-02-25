import {Http, Response, Headers, JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import {Injectable} from 'angular2/core';
import { BrowserXhr } from 'angular2/src/http/backends/browser_xhr';
/*import {ASSETS} from './mock.asset.tasks';*/
import {Asset} from './asset';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*import {RequestCredentials} from 'angular2/src/http/enums';*/
@Injectable()
export class AssetService{

  constructor(private http: Http) {

    /*let _build = http._backend._browserXHR.build;
      ttp._backend._browserXHR.build = () => {
       let _xhr =  _build();
      _xhr.withCredentials = true;
      return _xhr;
    };*/

  }

 //_assetServicesUrl = 'http://172.31.153.66:8080/rest/dojo/eam/asset/assets?filterColumns=comment%2CwarningCount&dateIngestedGE=2007-12-08%2000%3A00%3A00&sort=licensingWindowStart&start=15&count=15';
  _assetServicesUrl = 'app/scripts/asset/people.json'
  result = [];
  //private header: Headers;
  
  getAssetServices() { //console.log("Yay !!! Some function called me ");
  //return Promise.resolve(ASSETS); console.log("Yay !! I got it done through http");
  var header = new Headers(); 
  //header.append("TCookie", "JSESSIONID=40101848F3BD9A4D4593962C068ECA72"); 
  header.append("Content-Type","application/json"); 
  return this.http.get(this._assetServicesUrl/*,  {headers:header}*/).map((res: Response) =>
  res.json().items).catch(this.handleError);


  };

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}