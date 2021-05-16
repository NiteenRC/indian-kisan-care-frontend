import {SalesOrderDetail} from './../_model/sales-order-detail';
import {SalesOrder} from './../_model/sales-order';
import {Product} from './../_model/product';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from '../_services/product.service';
import {SalesOrderService} from '../_services/sales-order.service';
import {Customer} from '../_model/customer';
import {CustomerService} from '../_services/customer.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html'
})
export class SalesOrderComponent implements OnInit {
  products: Observable<Product[]>;
  product: Product = new Product();
  salesOrder: SalesOrder = new SalesOrder();
  salesOrderDetail: SalesOrderDetail = new SalesOrderDetail();
  customers: Observable<Customer[]>;

  rows: Array<SalesOrderDetail> = [];
  currentBalance = 0;
  previousBalance = 0;
  totalAmount = 0;
  totalBalance = 0;

  constructor(private productService: ProductService,
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
    this.customers = this.customerService.getCustomerList();
    this.salesOrder.amountPaid = 0;
  }

  save(): void {
    let isStockAvail = true;
    this.rows.forEach(value => {
      if (value.product.qty < value.qtyOrdered) {
        alert('No Stock for product: ' + value.product.productName);
        isStockAvail = false;
      }

      if (value.qtyOrdered === 0) {
        alert('Please add Quantity to : ' + value.product.productName);
        isStockAvail = false;
      }
    });

    if (isStockAvail) {
      this.salesOrder.currentBalance = this.currentBalance;
      this.salesOrder.salesOrderDetail = this.rows;
      this.salesOrder.totalPrice = this.totalAmount;

      if (this.currentBalance <= 0) {
        this.salesOrder.status = 'PAID';
      } else if (this.salesOrder.amountPaid > 0) {
        this.salesOrder.status = 'PARTIAL';
      } else {
        this.salesOrder.status = 'DUE';
      }

      this.salesOrderService
          .createSalesOrder(this.salesOrder).subscribe(data => {
            console.log(data);
            this.refreshAfterSave();
            this.reloadData();
          },
          error => {
            console.log(error);
            alert(error.error.errorMessage);
          });
    }
  }

  refreshAfterSave() {
    this.salesOrder = new SalesOrder();
    this.product = new Product();
    this.salesOrder.amountPaid = 0;
    this.previousBalance = 0;
    this.currentBalance = 0;
    this.totalBalance = 0;
    this.rows = [];
  }

  getTotalPrice() {
    let total = 0;
    this.rows.forEach(obj => {
      total += Number(obj.price);
    });
    return total;
  }

  getTotalQty() {
    let total = 0;
    this.rows.forEach(obj => {
      total += Number(obj.qtyOrdered);
    });
    return total;
  }

  totalAmountToPaid() {
    let totalAmount = 0;
    this.rows.forEach(obj => {
      totalAmount += Number(obj.qtyOrdered) * Number(obj.price);
    });
    this.totalAmount = totalAmount;
    return totalAmount;
  }

  removeCart(index: number) {
    if (this.rows.length === 1) {
      alert('Atleast one product should be added');
      return;
    }
    const amountBalance1 = this.totalAmount - (this.rows[index].price * this.rows[index].qtyOrdered);
    this.currentBalance = amountBalance1 - Number(this.salesOrder.amountPaid);
    this.totalBalance = this.previousBalance + this.currentBalance;
    this.rows.splice(index, 1);
    this.salesOrder.amountPaid = this.rows.length === 0 ? 0 : this.salesOrder.amountPaid;
  }

  selectedProduct(prod: Product) {
    this.rows.push({
      product: prod,
      qtyOrdered: 0,
      price: prod.currentPrice === 0 ? prod.price + 15 : prod.currentPrice
    });
  }

  customerBalanceData(customerID: any) {
    this.salesOrderService.getSalesOrderBalanceByCustomer(customerID).subscribe((data: number) => {
      console.log(data);
      this.previousBalance = data;
      this.changeInQtyOrPrice();
    }, (error: any) => console.log(error));
  }

  amountToBePaid(amountPaid: number) {
    this.currentBalance = this.totalAmount - amountPaid;
    this.totalBalance = this.previousBalance + this.currentBalance;
  }

  changeInQtyOrPrice() {
    this.currentBalance = this.totalAmount - this.salesOrder.amountPaid;
    this.totalBalance = this.previousBalance + this.currentBalance;
  }
}
