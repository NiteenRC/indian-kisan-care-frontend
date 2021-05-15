import {Category} from './category';

export class Product {
    productID: number;
    productName: string;
    category: Category;
    price: number;
    currentPrice: number;
    qty: number;
    active: boolean;
    gst: number;
}
