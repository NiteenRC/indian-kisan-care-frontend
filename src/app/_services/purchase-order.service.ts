import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

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

    getPurchaseOrderList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getPurchaseOrderBalaceBySupplier(supplierID: any): any {
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
}
