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
    salesOrderDetail: Array<SalesOrderDetail>;
}
