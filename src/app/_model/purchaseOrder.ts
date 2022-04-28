import {PurchaseOrderDetail} from './purchaseOrderDetail';
import {Supplier} from './supplier';

export class PurchaseOrder {
    status: string;
    supplier: Supplier;
    totalQty: number;
    totalPrice: number;
    amountPaid: number;
    currentBalance: number;
    previousBalance: number;
    purchaseOrderDetail: Array<PurchaseOrderDetail>;
    vehicleNo: string;
    dueDate: string;
    billDate: string;
}

export class UpdateProduct {
    purchasePrice: number;
    id: number;
    productName: string;
}
