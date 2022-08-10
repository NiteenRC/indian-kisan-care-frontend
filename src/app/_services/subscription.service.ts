import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

const baseUrl = HttpClientHelper.baseURL + '/subscription';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor(private http: HttpClient) {
    }

    createSubscription(obj: Object): Observable<Object> {
        return this.http.post(`${baseUrl}`, obj);
    }

    uploadSubscription(obj: Object): Observable<Object> {
        return this.http.post(`${baseUrl}`, obj);
    }
}
