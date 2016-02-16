import {Component, OnInit} from 'angular2/core';
import {Workflow} from './workflow';
import {WorkFlowTasksService} from './workflow.service';

@Component({
  selector: 'workflow-service',
  templateUrl: 'app/views/workflow.component.html',
  styleUrls:['app/css/panels.css'],
  providers:[WorkFlowTasksService]
})
export class WorkflowComponent {
    
  public wftasksLength = 0;
  public workflowservices: Workflow[];
  public visible = true;
  
  public theads = ['Tasks','Warning', 'In Progress', 'Falied'] 
  
  constructor(private _workflowService: WorkFlowTasksService ) { };
  
  getWorkflowTasks() {
   this._workflowService.getWorkflowTasks().
   then(wfservicestasks => this.workflowservices = wfservicestasks).then(wfservicestasks => this.wftasksLength = wfservicestasks.length;)
   
   /*this._workflowService.getWorkflowTasks()
                     .subscribe(
                       wfservicestasks => this.workflowservices = wfservicestasks,
                       error =>  this.errorMessage = <any>error);
*/};
  ngOnInit() {
    this.getWorkflowTasks();
  };
  toggle() {
    this.visible = !this.visible;
  }
}