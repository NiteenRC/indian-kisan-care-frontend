import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';
import { PageResponse } from '../_model/page-reponse';

@Injectable({
    providedIn: 'root'
})
export class PurchaseOrderService {

    private baseUrl = HttpClientHelper.baseURL + '/purchaseOrder';

    constructor(private http: HttpClient) {
    }

    createPurchaseOrder(invoice: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, invoice);
    }

    getPurchaseOrderList(name:any, request: any): Observable<any> {
        return this.http.get(this.baseUrl, {
            params: {
                name: name,
                page: request.page,
                size: request.size,
                sort: 'purchaseOrderID,desc',
            },
        });
    }

    getPurchaseOrderBalaceBySupplier(supplierID: any): any {
        return this.http.get(`${this.baseUrl}/supplier/balance/${supplierID}`);
    }

    getPurchaseOrderBySupplier(supplierID: number): any {
        return this.http.get(`${this.baseUrl}/supplier/${supplierID}`);
    }

    getAllSupplierPurchaseOrderBalace(): any {
        return this.http.get(`${this.baseUrl}/supplier`);
    }

    getAllSupplierPurchaseOrderBalanceSheet(): any {
        return this.http.get(`${this.baseUrl}/supplier/balance`);
    }

    updatePurchaseOrder(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteOrder(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    deleteOrderDetails(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/details/${id}`, {responseType: 'text'});
    }

    getPurchaseOrderDetailsList(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/details/${id}`);
    }

    getCurrentStock(productName): any {
        const opts = { params: {'productName': productName}};
        return this.http.get(`${this.baseUrl}/current-stock`,opts);
    }
}
