import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

import { BeefService } from './beef.service';

@Injectable()
export class BeefStore {
   
        public content: BehaviorSubject<any[]>;

        /**
         *  @constructor
         */
        constructor(private _service: BeefService) {
                this.content = new BehaviorSubject<any[]>([]);
                this.loadContent();
        }

        loadContent() {
                this._service
                    .getBeefContent()
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


        mockSale() {
                let sold_item: any = {};
                this._service
                    .getItem('91')
                    .subscribe(
                            result => {
                                    sold_item = Object.assign({}, result);
                                    let idx = 0;
                                    //let idx = this.content.getValue().indexOf(result);
                                    sold_item.sold_on_sale = sold_item.sold_on_sale + 1;
                                    sold_item.total_commission = sold_item.total_commission + (sold_item.sale_price * 0.01);
                                    //update model
                                    this.content.getValue()[idx].sold_on_sale = sold_item.sold_on_sale;
                                    this.content.getValue()[idx].total_commission = sold_item.total_commission; 
                                    console.log(this.content.getValue()[idx]);
                                    //update mock db
                                    this._service.mockSale('91', sold_item)
                                        .subscribe(
                                                () => {
                                                        console.log('completed updating mock db');
                                                }
                                        );
                            },
                            error => {
                                    console.log(error);
                            },
                            () => {
                                    console.log('completed getting item');
                            }
                    )
        }
}
