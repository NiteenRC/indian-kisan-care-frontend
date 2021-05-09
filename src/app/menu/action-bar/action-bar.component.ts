import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent {
  private _transformer = (node: MasterNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSource_Order=new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router:Router) {
    this.dataSource.data = TREE_DATA;
    this.dataSource_Order.data = Order_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  expanded = true;

  goTohome(){
    this.router.navigate(['dashboard']);
  }
  getComponent(item){
    if (item == "Product") {
      this.router.navigate(['dashboard/products']);
    }
    if (item == "Category") {
      this.router.navigate(['dashboard/categories-list']);
    }
    if (item == "Supplier") {
      this.router.navigate(['dashboard/suppliers-list']);
    }
    if (item == "Customer") {
      this.router.navigate(['dashboard/customers-list']);
    }
    if (item == "Company") {
      this.router.navigate(['dashboard/companies-list']);
    }
    if (item == "Location") {
      this.router.navigate(['dashboard/locations-list']);
    }
  }

  getOrder(item){
    if (item == "Sales Order") {
      this.router.navigate(['dashboard/salesOrder']);
    }
    if (item == "Purchase") {
      this.router.navigate(['dashboard/purchaseOrder']);
    }
  }
}

interface MasterNode {
  name: string;
  children?: MasterNode[];
}
const Order_DATA: MasterNode[] = [
  {
    name: 'Order',
    children: [
      {
        name: 'Sales Order',

      },
      {
        name: 'Purchase',

      }
    ]
  },
];

// <a class="nav-link" routerLink="/dashboard/salesOrder"><span *ngIf="expanded" class="d-none d-sm-inline">Sales
// Order</span></a>
// <a class="nav-link" routerLink="/dashboard/purchaseOrder"> <span *ngIf="expanded"
// class="d-none d-sm-inline">Purchase
// Order</span></a>
const TREE_DATA: MasterNode[] = [
  {
    name: 'MASTER',
    children: [
      {
        name: 'Product',

      },
      {
        name: 'Category',

      }, {
        name: 'Supplier',

      },
      {
        name: 'Customer',

      }, {
        name: 'Company',

      }
      , {
        name: 'Location',

      }
    ]
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
