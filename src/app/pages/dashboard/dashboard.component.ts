import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor(private _router: Router) {
  }


  onSelectItem(item: any) {
        console.log('selected ', item);
        this._router.navigate(['/pages/products/', item.category]);
  }
}
