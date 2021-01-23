import { Company } from './company';
import { Location } from './location';

export class Supplier {
  id: number;
  supplierName: string;
  company: Company;
  location: Location;
  phoneNumber: string;
}
