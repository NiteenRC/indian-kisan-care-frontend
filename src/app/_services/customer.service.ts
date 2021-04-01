import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private baseUrl = HttpClientHelper.baseURL + '/customer';

    constructor(private http: HttpClient) {
    }

    getCustomer(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // tslint:disable-next-line: ban-types
    createCustomer(customer: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, customer);
    }

    // tslint:disable-next-line: ban-types
    updateCustomer(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteCustomer(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getCustomerList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
