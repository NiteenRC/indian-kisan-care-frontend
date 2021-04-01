import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private baseUrl = HttpClientHelper.baseURL + '/supplier';

    constructor(private http: HttpClient) {
    }

    getSupplier(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // tslint:disable-next-line: ban-types
    createSupplier(supplier: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, supplier);
    }

    // tslint:disable-next-line: ban-types
    updateSupplier(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteSupplier(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getSupplierList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
