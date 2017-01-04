import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tiles',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./tiles.scss')],
  template: `<router-outlet></router-outlet>`
})
export class Tiles {

  constructor() {
  }

}
