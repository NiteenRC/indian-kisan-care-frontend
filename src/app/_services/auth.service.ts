import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClientHelper} from '../_model/http-client-helper';

const AUTH_API = HttpClientHelper.baseURL + '/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(credentials): Observable<any> {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }

    register(user): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password,
            role : user.role,
        }, httpOptions);
    }

    updateUser(user: any): Observable<Object> {
        return this.http.put(AUTH_API, {
            username: user.username,
            password: user.password
        }, httpOptions);
    }

    logout() {
        localStorage.clear();
    }

    getUserList(): Observable<any> {
        return this.http.get(AUTH_API);
    }
}
