import {Component, OnInit} from 'angular2/core';
import {Asset} from './asset';
import {AssetService} from './asset.service';

@Component({
  selector: 'asset-service',
  templateUrl: 'app/views/asset.component.html',
  styleUrls:['app/css/panels.css'],
  providers:[AssetService]
})
export class AssetComponent {

  public assetServiceLength = 0;
  public assetServices: Asset[];
  constructor(private _assetServices: AssetService ) { };
  
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
  }
  
}