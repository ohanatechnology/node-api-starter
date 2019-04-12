import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-yacht-list',
  templateUrl: './yacht-list.component.html',
  styleUrls: ['./yacht-list.component.scss']
})
export class YachtListComponent implements OnInit {

  constructor(public restApi: RestApiService) { }

  Yacht: any = [];

  ngOnInit() {
    this.loadYachts()
  }

  // Get yacht list
  loadYachts() {
    return this.restApi.getYachts().subscribe((data: {}) => {
      this.Yacht = data;
    })
  }

}
