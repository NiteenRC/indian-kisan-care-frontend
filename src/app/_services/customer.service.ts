import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../_model/http-client-helper';
import { TokenStorageService } from './token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private baseUrl = HttpClientHelper.baseURL + '/customer';

    constructor(private http: HttpClient, private tokenStorage: TokenStorageService,) {
    }

    header = new HttpHeaders().set("Authorization", `Bearer ${this.tokenStorage.getToken()}`);

    getCustomer(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`, { headers: this.header });
    }

    createCustomer(customer: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, customer, { headers: this.header });
    }

    updateCustomer(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value, { headers: this.header });
    }

    deleteCustomer(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    getCustomerList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`, { headers: this.header });
    }

    createCustomerSales(customer: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/sales`, customer, { headers: this.header });
    }

    getCustomerByName(customerName: string): any {
        const opts = { params: { 'customerName': customerName }, headers: this.header };
        return this.http.get(`${this.baseUrl}/customerName`, opts);
    }
}
