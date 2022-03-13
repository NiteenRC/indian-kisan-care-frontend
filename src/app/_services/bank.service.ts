import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

const baseUrl = HttpClientHelper.baseURL + '/bank';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class BankService {

    constructor(private http: HttpClient) {
    }

    createBank(bank: Object): Observable<Object> {
        return this.http.post(`${baseUrl}`, bank);
    }

    uploadImage(bank: Object): Observable<Object> {
        return this.http.post(`${baseUrl}/image`, bank);
    }

    getBankDetails(id: number): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
    }
}
