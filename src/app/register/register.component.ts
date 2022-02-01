import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.selection);
        
        let data = {
            "username" : this.form.username,
            "email": this.form.email,
            "password" : this.form.password,
            "role" : this.selection.map(x=> x.role),
        };

        this.authService.register(data).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                setTimeout(() => {
                    this.router.navigate(['login']);
                }, 2500);
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        );
    }

    selection = [];

    list = [
        { id: 1, role: 'Admin' },
        { id: 2, role: 'User' }
    ];

    getSelection(item) {
        return this.selection.findIndex(s => s.id === item.id) !== -1;
    }

    changeHandler(item: any, event: KeyboardEvent) {
        const id = item.id;

        const index = this.selection.findIndex(u => u.id === id);
        if (index === -1) {
            // ADD TO SELECTION
            // this.selection.push(item);
            this.selection = [...this.selection, item];
        } else {
            // REMOVE FROM SELECTION
            this.selection = this.selection.filter(user => user.id !== item.id)
            // this.selection.splice(index, 1)
        }
    }

    save() {
        this.form;
        this.form.controls['role'].setValue(this.selection);
        console.log(this.selection);
    }
}
