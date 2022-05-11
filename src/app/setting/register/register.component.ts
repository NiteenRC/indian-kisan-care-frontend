import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
    hide = true;
    displayedColumns: string[] ;
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
            'role': new FormControl(null, [Validators.required]),
        });
        
        this.displayColumns();
        this.getProductList();
    }

    displayColumns(){
        this.displayedColumns= ['sno', 'name', 'role'];
    }

    getProductList() {
        this.authService.getUserList().subscribe(res => {
            this.dataSource = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
        }, error => console.log(error));
    }

    clear() {
        this.registerForm = new FormGroup({
            'username': new FormControl(null),
            'password': new FormControl(null),
            'role': new FormControl(null),
        });
    }

    onSubmit() {
        if (this.registerForm.controls.role.value === null) {
            return;
        }

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
                //this.clear();

                this.showMsg = true;
                setTimeout(() => {
                    window.location.reload();
                    this.showMsg = false;
                }, 500);
            },
            err => {
                this.errorMessage = err.error.message;
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
