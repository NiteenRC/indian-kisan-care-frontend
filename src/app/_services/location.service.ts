import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private baseUrl = HttpClientHelper.baseURL + '/location';

    constructor(private http: HttpClient) {
    }

    getLocation(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createLocation(Location: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, Location);
    }

    updateLocation(value: any): Observable<any> {
        return this.http.put(`${this.baseUrl}`, value);
    }

    deleteLocation(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getLocationList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
