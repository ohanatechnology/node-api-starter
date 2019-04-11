import { Component } from '@angular/core'

@Component({
    selector: 'yachts',
    template: 'this is the yachts component <div *ngFor="let yacht of yachts">{{yacht.name}}</div>'
})
export class YachtsComponent {
    yachts = [{name: 'banana', length: 30},{name: 'odyssey', length: 40}];
}
