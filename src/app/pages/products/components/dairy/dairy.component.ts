import { Component, ViewEncapsulation } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { DairyStore } from './dairy.store';

@Component({
    selector: 'dairy',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./dairy.scss')],
    template: require('./dairy.html')
})

export class Dairy { 

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
    constructor(private _store: DairyStore) {
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

}
