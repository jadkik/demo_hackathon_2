import { Component, ViewEncapsulation } from '@angular/core';

import { UsableContentWrapper } from '../../../../usable-content/usable-content-wrapper.component';

import { UsableContent } from '../../../../usable-content/usable-content';
import { ProceduresStore } from './proceduresStore';



@Component({
    selector: 'procedures-wrapper',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./procedures.scss')],
    template: require('./procedures-wrapper.html')
})

export class ProceduresWrapper extends UsableContentWrapper { 

    /**
     *  @constructor
     */
    constructor(_store: ProceduresStore) {
        super(_store);
    }
    


    /* event handlers ...*/
    
    /**
     *  OVERRIDE
     *  handles event emitted from child component
     *  updates local state: pushes content selected from usable_content to selected_contend
     */
    onSelected(selected_content: UsableContent) {
        console.log('Parent calling store onSelect...');
        if (selected_content.getType() === "tile")
                this._store.onSelectBasic(selected_content);
        else
                if (selected_content.getType() === "procedure")
                        this._store.onSelectComposite(selected_content);
    }


    /**
     *
     */
    onNameChange(name:string) {
        this._store.selected_composite.metadata.identifiers.name = name;
        this._store.setEdited(true);
    }


    /**
     *
     */
    onNameSet(name:string) {
       this._store.new_composite.metadata.identifiers.name = name;
       this._store.setEdited(true); 
    }
}
