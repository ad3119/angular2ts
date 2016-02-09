import {Component, OnInit} from 'angular2/core';
import {Distribution} from './distribution';
import {DistributionService} from './distribution.service';

@Component({
  selector: 'distribution-service',
  templateUrl: 'app/views/distribution.component.html',
  styleUrls:['app/css/panels.css'],
  providers:[DistributionService]
})
export class DistributionComponent {

  public distrubtionTasksLength = 0;
  public distributionServices: Distribution[];
  constructor(private _distributionService: DistributionService ) { };
  
  getDistributionTasks() {
   this._distributionService.getDistributionTasks().
   then(tasks => this.distributionServices = tasks).then(tasks => this.distrubtionTasksLength = tasks.length;)
   
   /*this._workflowService.getWorkflowTasks()
                     .subscribe(
                       wfservicestasks => this.workflowservices = wfservicestasks,
                       error =>  this.errorMessage = <any>error);
*/  };
  ngOnInit() {
    this.getDistributionTasks();
  }
  
}