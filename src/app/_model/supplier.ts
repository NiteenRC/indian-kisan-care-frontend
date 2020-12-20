import { Company } from './company';
import { Location } from './location';

export class Supplier {
  supplierID: number;
  supplierName: string;
  company: Company;
  location: Location;
  phoneNumber: string;
}
