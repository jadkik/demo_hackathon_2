import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 

import { UsableContent } from '../usable-content';

import { UsableContentComponent } from '../usable-content.component';

@Component({
    selector: 'procedures',
    templateUrl: '../usable-content.html'
})

export class Procedures extends UsableContentComponent {

        @Input() contentStream: Observable<UsableContent[]>; 
        @Output() onSelected = new EventEmitter<UsableContent>();
        

        
        /**
         *  @constructor
         */
        constructor() {
            super();
            this.sortOptions = [{title: 'Time Created', identifier: 'time_created'}, {title: 'Name', identifier: 'name'}, {title: 'Type', identifier: 'type'}];
        }
}

