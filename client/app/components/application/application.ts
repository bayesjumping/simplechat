import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'simple-chat',
  templateUrl: 'app/components/application/application.html', 
  styleUrls: ['app/components/application/application.css'], 
  encapsulation:ViewEncapsulation.None
})
export default class ApplicationComponent {
  constructor() { }
}