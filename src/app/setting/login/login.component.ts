import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionComponent } from 'src/app/subscription/register/subscription.component';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {};
    errorMessage = '';
    roles: string[] = [];
    loginForm: FormGroup;
    hide = true;
    constructor(public dialog: MatDialog, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getUser().roles;
        }
        this.loginForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.minLength(2)]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        });
    }

    onSubmit() {
        let reqData = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value

        }

        if (!reqData.username && !reqData.password) {
            this.errorMessage = "Username and Password Required"
            return;
        }

        if (!reqData.username) {
            this.errorMessage = "Username is Required"
            return;
        }

        if (!reqData.password) {
            this.errorMessage = "Password is Required"
            return;
        }

        this.authService.login(reqData).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
                this.tokenStorage.saveUser(data);
                localStorage.setItem('username', data.username);
                localStorage.setItem('bankData', JSON.stringify(data));
                this.roles = this.tokenStorage.getUser().roles;
                this.router.navigate(['dashboard/home']);
                localStorage.setItem('bankData', JSON.stringify(data));
                AppComponent.role_super_admin = this.roles.includes('ROLE_SUPER_ADMIN');
                AppComponent.role_admin = this.roles.includes('ROLE_ADMIN');
                AppComponent.role_user = this.roles.includes('ROLE_USER');
            },
            err => {
                if (err.error.message === 'Error: Unauthorized') {
                    this.errorMessage = 'Entered Username or Password is incorrect.';
                } else {
                    //this.errorMessage = err.error.message;
                    this.subscriptionModel();
                }
            }
        );
    }

    signup() {
        this.router.navigate(['register']);
    }

    subscriptionModel(): void {
        const dialogRef = this.dialog.open(SubscriptionComponent, {
            width: '950px',
            disableClose: false,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
