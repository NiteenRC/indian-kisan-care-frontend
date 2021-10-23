import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {};
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getUser().roles;
        }
    }


    onSubmit() {
        this.authService.login(this.form).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
                this.tokenStorage.saveUser(data);
                localStorage.setItem('username', data.username);
                this.roles = this.tokenStorage.getUser().roles;
                this.router.navigate(['dashboard/home']);      
                AppComponent.role_admin = this.roles.includes('ROLE_SUPER_ADMIN') || this.roles.includes('ROLE_ADMIN');
            },
            err => {
                this.errorMessage = err.error.message;
            }
        );
    }

    signup() {
        this.router.navigate(['register']);
    }
}
