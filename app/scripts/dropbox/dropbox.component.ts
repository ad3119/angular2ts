import {Component, OnInit} from 'angular2/core';
import {Dropbox} from './dropbox';
import {DropboxService} from './dropbox.service';
import {percentagePipe} from './../pipes/percentage.pipe';

@Component({
  selector: 'dropbox',
  templateUrl: 'app/views/dropbox.component.html',
  pipes:[percentagePipe]
  styleUrls:['app/css/panels.css'],
  providers:[DropboxService]
})
export class DropboxComponent {

  
  public Dropboxes: Dropbox[];
  constructor(private _dropboxService: DropboxService ) { };
  
  getDropboxService() {
   this._dropboxService.getdropboxServices().then(tasks => this.Dropboxes = tasks)
   
   /*this._workflowService.getWorkflowTasks()
                     .subscribe(
                       wfservicestasks => this.workflowservices = wfservicestasks,
                       error =>  this.errorMessage = <any>error);
*/  };
  ngOnInit() {
    this.getDropboxService();
  }
  
}