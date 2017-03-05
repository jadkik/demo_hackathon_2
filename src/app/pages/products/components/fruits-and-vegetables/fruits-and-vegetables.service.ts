import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FruitsAndVegetablesService {

        private fruits_and_vegetablesUrl = 'app/fruits_and_vegetables';
        private headers = new Headers({'Content-Type':'application/json'});


        /**
         *  constructor
         */
        constructor(private http: Http) {
        }


        getItem(id: string): Observable<any> {
                return this.http
                           .get(`${this.fruits_and_vegetablesUrl}/${id}`)
                           .map(response => response = response.json().data)
                           .catch(this.handleError);
        }

        getFruitsAndVegetablesContent(): Observable<any[]> {
                return this.http
                           .get(this.fruits_and_vegetablesUrl)
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
