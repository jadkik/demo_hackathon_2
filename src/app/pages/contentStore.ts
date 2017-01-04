/**
 *  content store for Tiles page
 *  manages local state
 *  contains controller functions
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UUID } from 'angular2-uuid';

import { Content } from './content';

import { ContentBackendService } from './contentBackendService';



@Injectable()
export class ContentStore {

    /**
     *  local state
     */
    private _basic_content: BehaviorSubject<Content[]>;
    public basic_content: Observable<Content[]>;
    private _selected_content: BehaviorSubject<Content[]>;
    public selected_content: Observable<Content[]>;
    private _composite_content: BehaviorSubject<Content[]>;
    public composite_content: Observable<Content[]>;

    private _edited: boolean;
    private _selected_composite: boolean;
    private _selected_composite_id: string;
    private _selected_composite_index: number;

    /**
     *  @constructor
     *  @param _backendService: service that communicates with backend through http requests
     */
    constructor(private _backendService: ContentBackendService) { 
        this._basic_content = new BehaviorSubject([]);
        this._selected_content = new BehaviorSubject([]);
        this._composite_content = new BehaviorSubject([]);
        this.basic_content = this._basic_content.asObservable();
        this.selected_content = this._selected_content.asObservable();
        this.composite_content = this._composite_content.asObservable();
        this.loadInitialContent();
        this.initParams();
    }



    /**
     *  update local state (model)
     *  - onSelect basic content: - push to selected content list
     *                            - update edited
     *  - onSelect composite content: 
     */
    onSelect(selected_content: Content) {
        console.log('Store onSelect...');
        if (selected_content.getType() == 'basic') {
            this._selected_content.getValue().push(selected_content);
            this._edited = true;
        } else {
            this._selected_composite = true;
            this._selected_composite_id = selected_content.getId();
            this._selected_composite_index = this._composite_content.getValue().indexOf(selected_content);
            if (this._edited == true) {
                if (confirm('Do you want to save your changes?')) {
                    this.onSave();
                }
            }
            //TODO HANDLE CASE WHERE SAME COMPOSITE CONTENT IS SAVED THEN RESELECTED; BUG: WHAT IS DISPLAYED IN
            //SELECTED CONTENT IS THE COMPOSITE CONTENT BEFORE SAVING IT
            //TODO query backend for this content_id metadata then push it to selected_content
            let decomposed_content: Content[] = [];
            for (let content_id of selected_content.getComposition()) {
                decomposed_content.push(this.onCreateBasic(content_id));
            }
            this._selected_content.next(decomposed_content);
            this._edited = false;
        }
    }



    /**
     *  @return new composite content id
     *  wrap selected content into one composite content
     *  update local state (model)
     *  - onSave existing composite content: - update existing composite content
     *                                       - update edited
     *  - onSave new composite content: - push to composite content list
     *                                  - update edited
     */
    onSave(): string {
        console.log('Store onSave...');
        if (this._selected_composite == false) {
            let new_id = UUID.UUID();
            /* assert that new_id does not exist in composite content ids */
            if (this._composite_content.getValue().find(this.findId(new_id)) != undefined) {
                alert('Error: new composite id not available...');
                return null;
            }
            let new_composite_content = this.onCreateComposite(new_id);
            this._composite_content.getValue().push(new_composite_content);
            this._edited = false;
            this._selected_composite = true;
            this._selected_composite_id = new_id;
            this._selected_composite_index = this._composite_content.getValue().indexOf(new_composite_content);
            return new_id;
        } else {
            if (this._selected_composite_id == null || this._selected_composite_index == -1) {
                alert('Error: selected composite content cannot be found...');
                return null;
            }
            let new_composite_content = this.onCreateComposite(this._selected_composite_id);
            this._composite_content.getValue()[this._selected_composite_index] = new_composite_content;
            this._edited = false;
            return this._selected_composite_id;
        }
        //TODO call backend saving service
    }



    /**
     *  update local state (model)
     *  - onNew edited content: - save content
     *                          - push empty list to selected content list
     *  - onNew non-edited content: - push empty list to selected content list
     */
    onNew() {
        console.log('Store onNew...');
        if (this._edited == true) {
            if (confirm('Do you want to save your changes?')) {
                this.onSave();
            }
        }
        this._selected_content.next([]);
        this.initParams();
    }



    onDelete() {
        console.log('Store onDelete...');
        if (this._selected_composite == false && this._edited == false) {
                this._selected_content.next([]);
        } else {
            if (this._edited == false) {
                var confirm_message = 'Are you sure you want to delete this content?';
                if (this._selected_composite_id == null || this._selected_composite_index == -1) {
                    alert('Error: selected composite content cannot be found...');
                    return null;
                }
            } else {
                var confirm_message = 'Are you sure you want to delete this content before saving your changes?';
                if (this._selected_composite == true) {
                    if (this._selected_composite_id == null || this._selected_composite_index == -1) {
                        alert('Error: selected composite content cannot be found...');
                        return null;
                    }
                }
            }
            if (confirm (confirm_message)) {
                this._composite_content.getValue().splice(this._selected_composite_index, 1);
                this._selected_content.next([]);
                this.initParams();
            }
        }
    }



    /**
     *  @return basic content
     *  create basic content given content_id
     */
    onCreateBasic(new_id: string) {
        let new_content = new Content('basic', new_id, {information:[], timestamp:[], composition:[new_id]});
        return new_content;
    }



    /**
     *  @return composite content
     *  create new composite content from selected content
     */
    onCreateComposite(new_id: string): Content {
        let new_composition = this.getIds(this._selected_content);
        let new_content = new Content('composite', new_id, {information:[], timestamp:[], composition:new_composition});
        return new_content;
    }



    /**
     *  calls callback function for array.prototype.find()
     */
    findId(new_id: string) {
        return function(element) {
                return element.id === new_id;
        }
    }

 
 
    /**
     *  @param BehaviorSubject: stream of content to extract ids from
     *  @return list of ids in param content
     */
    getIds(content_stream: BehaviorSubject<Content[]>): string[] {
        let ids: string[] = [];
        for (let content of content_stream.getValue()) {
            ids.push(content.getId());
        }
        return ids;
    }




    /**
     *  initialize all non-stream params to their default values
     */
    initParams() {
        this._edited = false;
        this._selected_composite = false;
        this._selected_composite_id = null;
        this._selected_composite_index = -1;
    }



    /**
     *  calls backend service to fetch content upon initializing store
     */
    loadInitialContent() {
        //TODO call backend service
        //TODO remove temporary initial content
        var uuid_1 = UUID.UUID();
        var uuid_2 = UUID.UUID();
        let temp_content_1 = new Content('basic', uuid_1, {information:[], timestamp:[], composition:[uuid_1]});
        let temp_content_2 = new Content('basic', uuid_2, {information:[], timestamp:[], composition:[uuid_2]});
        this._basic_content.next([temp_content_1, temp_content_2]);
        console.log('loading initial content...');
        console.log('basic_content: ', this.basic_content);
        console.log('selected_content: ', this.selected_content);
        console.log('composite_content', this.composite_content);   
    }

    

}
