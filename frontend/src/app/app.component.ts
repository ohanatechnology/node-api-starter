import { Component } from '@angular/core';
import { YachtsComponent } from './yachts.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<yachts></yachts>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meanapp frontend';
}
