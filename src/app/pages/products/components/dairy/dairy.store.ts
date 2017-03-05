import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

import { DairyService } from './dairy.service';

@Injectable()
export class DairyStore {
   
        public content: BehaviorSubject<any[]>;

        /**
         *  @constructor
         */
        constructor(private _service: DairyService) {
                this.content = new BehaviorSubject<any[]>([]);
                this.loadContent();
        }

        loadContent() {
                this._service
                    .getDairyContent()
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
