
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS}    from 'angular2/http';
import {Asset} from './asset';
import {AssetService} from './asset.service';
import {percentagePipe} from './../pipes/percentage.pipe';
import {statusPipe} from './../pipes/status';
import {SearchPipe} from './../pipes/search.pipe';
import {MyBaseRequestOptions} from './../browser-request/customXhr'
import {Sorter} from './../pipes/Sorter';

@Component({
  selector: 'asset-service',
  templateUrl: 'app/views/asset.component.html',
  pipes: [percentagePipe, statusPipe, SearchPipe], 
  styleUrls:['app/css/panels.css'],
  providers: [AssetService, HTTP_PROVIDERS, JSONP_PROVIDERS, MyBaseRequestOptions]
})
export class AssetComponent {
  public search_text = "";
  public assetServiceLength = 0;
  public assetServices: Asset[];
  errorMessage: string;
  sorter: Sorter;
  sortedColumn = "assetId";
  sortAsc = false;

  constructor(private _assetServices: AssetService ) { 
    this.sorter = new Sorter();

  };

  sort(key){
    this.sorter.sort(key, this.assetServices);
    this.sortedColumn = key;
    if (key == this.sortedColumn) { 
      this.sortAsc = !this.sortAsc;
    }
    else {
    this.sortAsc = false;
    }

  }
  
  /*sortIcon(key) {
    console.log(key);
    if (this.sortedColumn == key) return true;
    return false;
  }*/


  public visible = true;
  toggle() {
    this.visible = !this.visible;
  }
  getAssetService() {
   /*this._assetServices.getAssetServices().
   then(tasks => this.assetServices = tasks).then(tasks => this.assetServiceLength = tasks.length;)
   */
   this._assetServices.getAssetServices().subscribe(tasks => this.assetServices = tasks,error =>  this.errorMessage = <any>error);
  };
  ngOnInit() {
    this.getAssetService();
  }
  
}