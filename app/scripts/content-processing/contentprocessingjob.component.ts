import {Component, OnInit} from 'angular2/core';
import {ContentProcessingJob} from './contentprocessingjob';
import {ContentProcessingJobService} from './contentprocessingjob.service';

@Component({
  selector: 'contentprocessingjob',
  templateUrl: 'app/views/contentprocessingjob.component.html',
  styleUrls:['app/css/panels.css'],
  providers:[ContentProcessingJobService]
})
export class ContentProcessingJobComponent {
  public visible = true;
  toggle() {
    this.visible = !this.visible;
  }
  public contentProcessingJobsLength = 0;
  public contentProcessingJobs: ContentProcessingJob[];
  constructor(private _contentProcessingJobService: ContentProcessingJobService ) { };
  
  getContentProcessingJobs() {
   this._contentProcessingJobService.getContentProcessingJobs().
   then(jobs => this.contentProcessingJobs = jobs).then(jobs => this.contentProcessingJobsLength = jobs.length;)
  };
  
  ngOnInit() {
    this.getContentProcessingJobs();
  }
  
}