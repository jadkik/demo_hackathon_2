import { Component, ViewEncapsulation } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { BeefStore } from './beef.store';

@Component({
    selector: 'beef',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./beef.scss')],
    template: require('./beef.html')
})

export class Beef { 

    query: string = '';

    settings = {
      add: {
        addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        createButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true
      },
      columns: {
        product: {
          title: 'Product',
          type: 'string'
        },
        valid_for: {
          title: 'Valid For',
          type: 'number'
        },
        start_discount: {
          title: 'Start Discount Before',
          type: 'number'
        },
        original_price: {
          title: 'Original Price',
          type: 'number'
        },
        sale_price: {
          title: 'Sale Price',
          type: 'number'
        },
        sold_on_sale: {
          title: 'Sold on Sale',
          type: 'number'
        },
        total_commission: {
          title: 'Total Commission',
          type: 'number'
        }
      }
    };

    source: LocalDataSource = new LocalDataSource();



    /**
     *  @constructor
     */
    constructor(private _store: BeefStore) {
    //        this.loadData();
    }
    
    ngOnInit() {
            this._store
                .content
                .subscribe(
                        result  => {
                                this.source.load(result);
                        },
                        error => {
                                console.log(error);
                        }
                );

            setTimeout(() => {
                    this._store.mockSale(); 
                    this._store
                        .content
                        .subscribe(
                                result  => {
                                        this.source.load(result);
                                },
                                error => {
                                        console.log(error);
                                }
                        );
                    }, 3000);
    }

    ngOnDestroy() {
            this._store.content.unsubscribe();
    }
    


    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }

    //loadData() {
    //        this._store.getBeefContent()
    //                     .subscribe(
    //                            result => {
    //                                    this.source.load(result);
    //                            },
    //                            error => {
    //                                    console.log(error);
    //                            },
    //                            () => {
    //                                    console.log('completed getting beef');
    //                            }
    //                     );
    //}
}
