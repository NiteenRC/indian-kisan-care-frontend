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
            bankAccount:{
                bankName: user.bankAccount.bankName,
                branchName: user.bankAccount.branchName,
                accountNo: user.bankAccount.accountNo,
                ifscCode: user.bankAccount.ifscCode
            },
            user: {
                gstNo: user.user.gstNo,
                panNo: user.user.panNo,
                phoneNumber:  user.user.phoneNumber,
                brandName:  user.user.brandName
            }
        }, httpOptions);
    }

    logout() {
        localStorage.clear();
    }
}
