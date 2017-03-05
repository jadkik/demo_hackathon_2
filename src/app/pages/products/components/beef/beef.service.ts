import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeefService {

        private beefUrl = 'app/beef';
        private headers = new Headers({'Content-Type':'application/json'});


        /**
         *  constructor
         */
        constructor(private http: Http) {
        }


        getItem(id: string): Observable<any> {
                return this.http
                           .get(`${this.beefUrl}/${id}`)
                           .map(response => response = response.json().data)
                           .catch(this.handleError);
        }

        getBeefContent(): Observable<any[]> {
                return this.http
                           .get(this.beefUrl)
                           .map(response => response = response.json().data)
                           .catch(this.handleError);
        }


        /**
         *  mock a sale
         */
        mockSale(id: string, sold_item: any) {
                return this.http
                           .put(`${this.beefUrl}/${id}`, JSON.stringify(sold_item), {headers: this.headers});
        }



        /*
         *  handle errors from http requests
         */
        handleError(error: any): Promise<any> {
            console.error('An error occured, ', error);
            return Promise.reject(error.message || error);
        }
}
