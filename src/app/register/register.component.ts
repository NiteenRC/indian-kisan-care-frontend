import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: any = {};
    showMsg: boolean = false;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    registerForm: FormGroup;
    favoriteSeason: string;
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
            'role': new FormControl(null, [Validators.required]),
        });
    }

    clear() {
        this.registerForm = new FormGroup({
            'username': new FormControl(null),
            'password': new FormControl(null),
            'role': new FormControl(null),
        });
    }

    onSubmit() {
        let data = {
            "username": this.registerForm.controls.username.value,
            "password": this.registerForm.controls.password.value,
            "role": [this.registerForm.controls.role.value],
        };

        this.authService.register(data).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.clear();

                this.showMsg = true;
                setTimeout(() => {
                    this.showMsg = false;
                }, 2000);
            },
            err => {
                this.errorMessage = err.error.error;
                this.isSignUpFailed = true;
            }
        );
    }

    selection = [];

    list = [
        { id: 1, role: 'admin' },
        { id: 2, role: 'user' }
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
