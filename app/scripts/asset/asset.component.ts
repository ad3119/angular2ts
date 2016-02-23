import {Component, OnInit, ElementRef, AfterViewInit} from 'angular2/core';
import {Asset} from './asset';
import {AssetService} from './asset.service';
import {percentagePipe} from './../pipes/percentage.pipe';

declare var jQuery:JQueryStatic;

@Component({
  selector: 'asset-service',
  templateUrl: 'app/views/asset.component.html',
  pipes:[percentagePipe]
  styleUrls:['app/css/panels.css'],
  providers:[AssetService]
})
export class AssetComponent {

  public assetServiceLength = 0;
  public assetServices: Asset[];
  constructor(private _assetServices: AssetService, private el:ElementRef ) { };
  public visible = true;
  toggle() {
    this.visible = !this.visible;
  };
  getAssetService() {
   this._assetServices.getAssetServices().
   then(tasks => this.assetServices = tasks).then(tasks => this.assetServiceLength = tasks.length;)
   
   /*this._workflowService.getWorkflowTasks()
                     .subscribe(
                       wfservicestasks => this.workflowservices = wfservicestasks,
                       error =>  this.errorMessage = <any>error);
*/  };
  ngOnInit() {
    this.getAssetService();
  };
}