import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class SalesOrderService {

    private baseUrl = HttpClientHelper.baseURL + '/salesOrder';

    constructor(private http: HttpClient) {
    }

    createSalesOrder(invoice: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, invoice);
    }

    getSalesOrderList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getSalesOrderBalanceByCustomer(customerID: any): any {
        return this.http.get(`${this.baseUrl}/customer/balance/${customerID}`);
    }

    getAllCustomerSalesOrderBalance(): any {
        return this.http.get(`${this.baseUrl}/customer/`);
    }

    getAllCustomerSalesOrderBalanceSheet(): any {
        return this.http.get(`${this.baseUrl}/customer/balance`);
    }
}
