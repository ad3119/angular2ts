import {Injectable} from 'angular2/core';
import { BrowserXhr } from 'angular2/src/http/backends/browser_xhr';
import { BaseRequestOptions, RequestOptions } from 'angular2/src/http/base_request_options';
import {HTTP_PROVIDERS, Headers} from 'angular2/http';

@Injectable()
export class MyBaseRequestOptions extends BaseRequestOptions {
	headers: Headers = new Headers({
		 'X-Requested-With': 'XMLHttpRequest'
  	});
	withCredentials: boolean = true;
}