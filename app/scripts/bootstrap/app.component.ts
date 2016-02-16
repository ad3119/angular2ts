import {Component} from 'angular2/core';
import {Location, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DashboardComponent} from './../dashboard/dashboard.component';
import {WorkflowComponent} from './../workflow/workflow.component';
import {AssetComponent} from './../asset/asset.component';
import {DistributionComponent} from './../distribution/distribution.component';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html',
  styleUrls: ['app/css/navigation.css', 'app/css/footer.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS]
  
})

@RouteConfig([
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true}, 
  {path: '/workflow', name: 'Workflow', component: WorkflowComponent}, 
  {path: '/asset', name: 'Asset', component: AssetComponent},
  {path: '/distribution', name: 'Distribution', component: DistributionComponent}
])

export class AppComponent {
  public title = 'Tour of Heroes';
  public searchVisible = false;
  constructor(location: Location) {
    location.go(location.path());
  }
  
  
  
  public toggle() {
    console.log('Hi , I am in');
    this.searchVisible = !this.searchVisible;
  }
}