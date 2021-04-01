import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CommonService {
    isLoad = false;

    constructor(private http: HttpClient) {
    }

    getLoader() {
        this.isLoad = true;
    }

    stopLoader() {
        this.isLoad = false;
    }
}
