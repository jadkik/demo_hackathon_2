import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'themes',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./themes.scss')],
  template: require('./themes.html')
})
export class Themes {

  constructor() {
  }

}
