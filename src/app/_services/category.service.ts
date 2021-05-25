import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';
import { Category } from '../_model/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseUrl = HttpClientHelper.baseURL + '/category';

    constructor(private http: HttpClient) {
    }

    getCategory(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    getCategoryByName(categoryName: string): any {
        const opts = { params: {'categoryName': categoryName}};
        return this.http.get(`${this.baseUrl}/categoryName`, opts);
    }

    // tslint:disable-next-line: ban-types
    createCategory(category: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, category);
    }

    // tslint:disable-next-line: ban-types
    updateCategory(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getCategoryList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
