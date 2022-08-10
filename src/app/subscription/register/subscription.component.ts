import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SubscriptionService } from 'src/app/_services/subscription.service';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
    form: any = {};
    showMsg: boolean = false;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    subscriptionForm: FormGroup;
    favoriteSeason: string;
    hide = true;
    displayedColumns: string[];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private subscriptionService: SubscriptionService) {
    }

    ngOnInit() {
        this.subscriptionForm = new FormGroup({
            'period': new FormControl(null, [Validators.required]),
            'accessCode': new FormControl(null, [Validators.required])
        });
    }

    clear() {
        this.subscriptionForm = new FormGroup({
            'period': new FormControl(null),
            'accessCode': new FormControl(null)
        });
    }

    onSubmit() {
        if (this.subscriptionForm.controls.period.value === null ||
            this.subscriptionForm.controls.accessCode.value === null) {
            return;
        }

        let data = {
            "period": this.subscriptionForm.controls.period.value,
            "accessCode": this.subscriptionForm.controls.accessCode.value
        };

        this.subscriptionService.createSubscription(data).subscribe(
            data => {
                this.showMsg = true;
                setTimeout(() => {
                    window.location.reload();
                    this.showMsg = false;
                }, 500);
            }, err => {
                this.errorMessage = err.error.message;
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
