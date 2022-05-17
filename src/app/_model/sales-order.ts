import {SalesOrderDetail} from './sales-order-detail';
import {Customer} from './customer';

export class SalesOrder {
    status: string;
    customer: Customer;
    totalQty: number;
    totalPrice: number;
    amountPaid: number;
    currentBalance: number;
    previousBalance: number;
    currentDue: number;
    salesOrderDetail: Array<SalesOrderDetail>;
    vehicleNo: string;
    dueDate: string;
    billDate: string;
    deliverStatus: string;
    paymentMode: string;
    upiPayment: number;
    cashPayment: number;
    updatedProductSalePriceList: Array<UpdateProduct>;
}

export class UpdateProduct {
    price: number;
    id: number;
    productName: string;
}
