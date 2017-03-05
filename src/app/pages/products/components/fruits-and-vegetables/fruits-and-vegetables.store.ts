import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

import { FruitsAndVegetablesService } from './fruits-and-vegetables.service';

@Injectable()
export class FruitsAndVegetablesStore {
   
        public content: BehaviorSubject<any[]>;

        /**
         *  @constructor
         */
        constructor(private _service: FruitsAndVegetablesService) {
                this.content = new BehaviorSubject<any[]>([]);
                this.loadContent();
        }

        loadContent() {
                this._service
                    .getFruitsAndVegetablesContent()
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
