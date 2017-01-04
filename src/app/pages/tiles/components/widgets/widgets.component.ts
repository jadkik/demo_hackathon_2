import {Component, ViewEncapsulation} from '@angular/core';

import {IconsService} from './icons.service';

@Component({
  selector: 'widgets',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./widgets.scss'),
           require('./icons.scss')],
  template: require('./widgets.html')
})

export class Widgets {

  icons:any;
  widgets:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
    this.widgets = this._iconsService.getWidgets();
  }

}
