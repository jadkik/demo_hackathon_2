/**
 *  parent component
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'groups',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./groups.scss')],
  template: `<router-outlet></router-outlet>`
})
export class Groups {

  constructor() {
  }

}
