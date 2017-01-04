import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'ba-segment',
  styles: [require('./baSegment.scss')],
  template: require('./baSegment.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaSegment {
  @Input() title:String;
}
