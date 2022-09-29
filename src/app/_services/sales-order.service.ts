import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../_model/http-client-helper';
import { PageResponse } from '../_model/page-reponse';

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

    countSalesOrders(): Observable<any> {
        return this.http.get(`${this.baseUrl}/transactions/count`);
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

    updateSalesOrderBalance(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/payment/balance`, value);
    }

    getBarChartReport(): any {
        return this.http.get(`${this.baseUrl}/barChart`);
    }

    getSalesOrderList(request: any): Observable<any> {
        const params = request;
        return this.http.get<PageResponse<any>>(`${this.baseUrl}`, {params});
    }

    getSalesOrderByCustomerName(request: any): Observable<any> {
        const params = request;
        return this.http.get<PageResponse<any>>(`${this.baseUrl}/customer/name`, {params});
    }

    getSalesOrderByProductWise(productName, start: string, end: string): any {
        const opts = { params: {'productName': productName, 'startDate': start, 'endDate': end}};
        return this.http.get(`${this.baseUrl}/product`,opts);
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

    getSalesOrderDetailsList(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/details/${id}`);
    }

    getSalesOrderByCustomer(supplierID: number): any {
        return this.http.get(`${this.baseUrl}/customer/${supplierID}`);
    }
}
