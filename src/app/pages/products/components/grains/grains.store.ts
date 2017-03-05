import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

import { GrainsService } from './grains.service';

@Injectable()
export class GrainsStore {
   
        public content: BehaviorSubject<any[]>;

        /**
         *  @constructor
         */
        constructor(private _service: GrainsService) {
                this.content = new BehaviorSubject<any[]>([]);
                this.loadContent();
        }

        loadContent() {
                this._service
                    .getGrainsContent()
                    .subscribe(
                            result => {
                                    this.content.next(result);
                            },
                            error => {
                                    console.log(error);
                            },
                            () => {
                                    console.log('completed getting content');
                            }
                    );
        }


}
