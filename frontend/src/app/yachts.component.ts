import { Component } from '@angular/core'

@Component({
    selector: 'yachts',
    template: '<div class="container"><div class="row"><div class="col-md-6">col1</div><div class="col-md-6">col2</div></div></div>this is the yachts component <div *ngFor="let yacht of yachts">{{yacht.name}}</div>'
})
export class YachtsComponent {
    yachts = [{name: 'banana', length: 30},{name: 'odyssey', length: 40}];
}
