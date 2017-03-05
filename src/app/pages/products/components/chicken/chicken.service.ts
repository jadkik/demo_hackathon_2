import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChickenService {

        private chickenUrl = 'app/chicken';
        private headers = new Headers({'Content-Type':'application/json'});


        /**
         *  constructor
         */
        constructor(private http: Http) {
        }


        getItem(id: string): Observable<any> {
                return this.http
                           .get(`${this.chickenUrl}/${id}`)
                           .map(response => response = response.json().data)
                           .catch(this.handleError);
        }

        getChickenContent(): Observable<any[]> {
                return this.http
                           .get(this.chickenUrl)
                           .map(response => response = response.json().data)
                           .catch(this.handleError);
        }


        /*
         *  handle errors from http requests
         */
        handleError(error: any): Promise<any> {
            console.error('An error occured, ', error);
            return Promise.reject(error.message || error);
        }
}
