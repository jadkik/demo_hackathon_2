import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

import { ChickenService } from './chicken.service';

@Injectable()
export class ChickenStore {
   
        public content: BehaviorSubject<any[]>;

        /**
         *  @constructor
         */
        constructor(private _service: ChickenService) {
                this.content = new BehaviorSubject<any[]>([]);
                this.loadContent();
        }

        loadContent() {
                this._service
                    .getChickenContent()
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
