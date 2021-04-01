import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CategoryService} from 'src/app/_services/category.service';
import {LocationService} from 'src/app/_services/location.service';
import {ProductService} from 'src/app/_services/product.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
    test: any;
    myControl = new FormControl();
    options: string[] = [];
    filteredOptions: Observable<string[]>;
    listOfCategories = [];
    productForm: FormGroup;
    locationForm: FormGroup;
    productUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;
    companies: any;

    constructor(private location: LocationService,
                private productService: ProductService,
                private categoryService: CategoryService,
                public dialogRef: MatDialogRef<CreateProductComponent>,
                @Inject(MAT_DIALOG_DATA) private data) {
        this.productUpdateData = data;
        this.productForm = new FormGroup({
            myControl: new FormControl(null,),
            productName: new FormControl(null, [Validators.required]),
            price: new FormControl(null, [Validators.required]),
            qty: new FormControl(null, [Validators.required])
        });

        this.locationForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
        });

        if (data != null) {
            this.test = this.productUpdateData.category.categoryName,
                //this.productForm.controls["supplierName"].setValue(this.productUpdateData.data.supplierName);
                this.productForm.controls['productName'].setValue(this.productUpdateData.productName);
            this.productForm.controls['price'].setValue(this.productUpdateData.price);
            this.productForm.controls['qty'].setValue(this.productUpdateData.qty);
        }
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
        this.getCategoryList();
    }

    onSubmit() {
        if (this.productUpdateData?.id != null) {
            this.updateProduct();
        } else {
            this.addProduct();
        }
    }

    addProduct() {
        let data = {
            productName: this.productForm.controls.productName.value,
            price: this.productForm.controls.price.value,
            qty: this.productForm.controls.qty.value,
            // category: this.productForm.controls.myControl.value,
            category: {
                categoryName: this.test,
                id: 2,
                categoryDesc: 'test',
            }
        };
        this.productService.createProduct(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Supplier Successfully Created..!';
                // this.getCategoryList();
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });

    }

    updateProduct() {
        let data = {
            id: this.productUpdateData.id,
            productName: this.productForm.controls.productName.value,
            price: this.productForm.controls.price.value,
            qty: this.productForm.controls.qty.value,
            category: {
                categoryName: this.test,
                id: 2,
                categoryDesc: 'test',
            }
        };
        this.productService.updateProduct(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Supplier Successfully Created..!';
                // this.getCategoryList();
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });

    }

    getCategoryList() {
        //this.filteredOptions = this.categoryService.getCategoryList();

        this.categoryService.getCategoryList().subscribe(data => {
            data.forEach(x => {
                this.options.push(x.categoryName);
            });
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

}
