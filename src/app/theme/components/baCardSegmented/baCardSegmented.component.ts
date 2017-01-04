import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'ba-card-segmented',
  styles: [require('./baCardSegmented.scss'),
           require('./icons.scss')],
  template: require('./baCardSegmented.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCardSegmented {
  @Input() baCardClass:String;
  @Input() segments:Array<any>;
  @Input() segmentDataClass:String;
  @Input() dataItemClass:String;
}
