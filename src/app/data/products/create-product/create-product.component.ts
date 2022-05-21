//import { Category } from '../../../_model/category';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { autocompleteStringValidator } from 'src/app/validators/category.validator';
//import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_model/product';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
    myControl = new FormControl();
    //options: Category[] = [];
    //filteredOptions: Observable<Category[]>;
    filteredProducts: Observable<Product[]>;

    //listOfCategories = [];
    products = [];
    productForm: FormGroup;
    locationForm: FormGroup;
    productUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;
    companies: any;
    singleClickDisable = false;

    constructor(private productService: ProductService,
        //private categoryService: CategoryService,
        public dialogRef: MatDialogRef<CreateProductComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
        this.productForm = new FormGroup({
            //categoryName: new FormControl(null, [Validators.required]),
            productName: new FormControl(null, [Validators.required]),
            price: new FormControl(null),
            gst: new FormControl(null, [Validators.pattern('^[0-9]*$'), Validators.min(0), Validators.max(100)]),
            hsnNo: new FormControl(null),
            currentPrice: new FormControl(null, [Validators.pattern('^[0-9]*$'), Validators.min(0)]),
            purchasePrice: new FormControl(null, [Validators.pattern('^[0-9]*$'), Validators.min(0)]),
            qty: new FormControl(null),
            profit: new FormControl(null),
        });

        this.locationForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
        });

        if (data != null) {
            this.productUpdateData = data?.data;
            //this.productForm.controls['categoryName'].setValue(this.productUpdateData.category.categoryName);
            this.productForm.controls['productName'].setValue(this.productUpdateData.productName);
            this.productForm.controls['price'].setValue(this.productUpdateData.price);
            this.productForm.controls['gst'].setValue(this.productUpdateData.gst);
            this.productForm.controls['hsnNo'].setValue(this.productUpdateData.hsnNo);
            this.productForm.controls['currentPrice'].setValue(this.productUpdateData.currentPrice);
            this.productForm.controls['purchasePrice'].setValue(this.productUpdateData.purchasePrice);
            this.productForm.controls['qty'].setValue(this.productUpdateData.qty);
            this.productForm.controls['profit'].setValue(this.productUpdateData.profit);
        }
    }

    closeModal(): void {
            this.dialogRef.close();
    }

    ngOnInit(): void {
        this.fetchData();
        this.singleClickDisable = false;
    }

    onSubmit() {
        if (this.productForm.valid) {
            if (this.productUpdateData?.id != null) {
                this.updateProduct();
            } else {
                this.addProduct();
            }
        }
    }

    addProduct() {
        this.singleClickDisable = true;
        /*const categoryName = this.productForm.controls.categoryName.value;
        let category = this._findCategory(categoryName);

        if (category == undefined) {
            category = { 'categoryName': categoryName };
        }*/

        let hsnNo = this.productForm.controls.hsnNo.value;
        if (hsnNo === null) {
            hsnNo = 'NA';
        }

        let data = {
            productName: this.productForm.controls.productName.value,
            //price: this.productForm.controls.price.value,
            gst: this.productForm.controls.gst.value,
            hsnNo: hsnNo,
            currentPrice: this.productForm.controls.currentPrice.value,
            purchasePrice: this.productForm.controls.purchasePrice.value,
            //qty: this.productForm.controls.qty.value,
            //category: category
        };

        this.productService.createProduct(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Product Successfully Updated..!';
                // this.getCategoryList();
                this.closeModal();
                this.singleClickDisable = false;
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
            this.singleClickDisable = false;
        });
    }

    /*saveCategory(categoryName: string) {
        let data = {
            categoryName: categoryName
        }
        this.categoryService.createCategory(data).subscribe();
    }*/

    updateProduct() {
        /*const selectedCategoryName = this.productForm.controls.categoryName.value;
        let category = this._findCategory(selectedCategoryName);

        if (category == undefined) {
            category = { 'categoryName': selectedCategoryName };
        }*/

        let data = {
            id: this.productUpdateData.id,
            productName: this.productForm.controls.productName.value,
            price: this.productForm.controls.price.value,
            gst: this.productForm.controls.gst.value,
            hsnNo: this.productForm.controls.hsnNo.value,
            currentPrice: this.productForm.controls.currentPrice.value,
            purchasePrice: this.productForm.controls.purchasePrice.value,
            qty: this.productForm.controls.qty.value,
            profit: this.productForm.controls.profit.value,
            // category,
        };
        this.productService.updateProduct(data).subscribe(res => {
            if (res != null) {
                let s = 0;
                this.successMsg = 'Product Successfully Created..!';
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });
    }

    fetchData() {
        /*this.categoryService.getCategoryList().subscribe(data => {
            this.listOfCategories = data;
            this._valueChangesListner();
        });*/

        this.productService.getProductsList().subscribe(data => {
            this.products = data;
            this._valueChangesListner();
        });
    }

    /*private _filter(value: string): Category[] {
        if (!value) {
            return this.listOfCategories;
        }
        const filterValue = value.toLowerCase();
        return this.listOfCategories.filter(option => option.categoryName.toLowerCase().includes(filterValue))
    }*/

    private _filterProduct(value: string): Product[] {
        if (!value) {
          return this.products;
        }
        const filterValue = value.toLowerCase();
        return this.products.filter(option => option.productName.toLowerCase().includes(filterValue));
    }

    /*private _findCategory(categoryName: string) {
        return this.listOfCategories.find(option => option?.categoryName === categoryName);
    }*/

    private _valueChangesListner() {
        /*this.filteredOptions = this.productForm.controls['categoryName'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );*/

        this.filteredProducts = this.productForm.controls['productName'].valueChanges.pipe(
            startWith(''),
            map(value => this._filterProduct(value))
          );
    }
}
