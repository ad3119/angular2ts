import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseRequestOptions, RequestOptions } from 'angular2/src/http/base_request_options';

class MyBaseRequestOptions extends BaseRequestOptions {
	headers: Headers = new Headers({
    'X-Requested-With': 'XMLHttpRequest'
  });
  withCredentials: boolean = true; 
}

//bootstrap( AppComponent, [ provide(RequestOptions, {useClass: MyBaseRequestOptions}) ] );
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy }),provide(RequestOptions, {useClass: MyBaseRequestOptions}) ]);

