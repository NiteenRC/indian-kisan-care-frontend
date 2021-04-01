import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    private baseUrl = HttpClientHelper.baseURL + '/company';

    constructor(private http: HttpClient) {
    }

    getCompany(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // tslint:disable-next-line: ban-types
    createCompany(company: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, company);
    }

    // tslint:disable-next-line: ban-types
    updateCompany(value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteCompany(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getCompanyList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
