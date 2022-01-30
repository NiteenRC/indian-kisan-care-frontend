import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../_model/http-client-helper';

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

    getSalesOrderBalaceByCustomer(customerID: any): any {
        return this.http.get(`${this.baseUrl}/customer/balance/${customerID}`);
    }

    getAllCustomerSalesOrderBalance(): any {
        return this.http.get(`${this.baseUrl}/customer/`);
    }

    getAllCustomerSalesOrderBalanceSheet(): any {
        return this.http.get(`${this.baseUrl}/customer/balance`);
    }

    updateSalesOrder(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    getBarChartReport(): any {
        return this.http.get(`${this.baseUrl}/barChart`);
    }

    getSalesOrderByProductWise(): any {
        return this.http.get(`${this.baseUrl}/product`);
    }

    getStockBook(productName: string): any {
        const opts = { params: {'productName': productName}};
        return this.http.get(`${this.baseUrl}/stock-book`,opts);
    }

    getStockBookByDate(productName, start: string, end: string): any {
        const opts = { params: {'productName': productName, 'startDate': start, 'endDate': end}};
        return this.http.get(`${this.baseUrl}/stock-book-by-date`,opts);
    }

    deleteSalesOrder(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    deleteOrderDetails(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/details/${id}`, {responseType: 'text'});
    }

    getSalesOrder(salesOrderID: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/${salesOrderID}`);
    }
}
