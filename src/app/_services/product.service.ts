import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = HttpClientHelper.baseURL + '/product';

    constructor(private http: HttpClient) {
    }

    getProduct(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // tslint:disable-next-line: ban-types
    createProduct(product: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, product);
    }

    // tslint:disable-next-line: ban-types
    createProductWithCategory(product: Object, id: number): Observable<Object> {
        return this.http.post(`${this.baseUrl}/${id}`, product);
    }

    // tslint:disable-next-line: ban-types
    updateProduct(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    updateProductList(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/updatePrice`, value);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getProductsList(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
}
