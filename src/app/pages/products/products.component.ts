/**
 *  parent component
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'products',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./products.scss')],
  template: `<router-outlet></router-outlet>`
})
export class Products {

  constructor() {
  }

}
