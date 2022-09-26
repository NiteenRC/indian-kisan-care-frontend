import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent implements OnInit{
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
  dataSource_Order = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceReports = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceBalance = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceSummary = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceSetting = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  role: boolean;

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
    this.dataSource_Order.data = Order_DATA;
    this.dataSourceReports.data = REPORTS;
    this.dataSourceSummary.data = SUMMARY;
    this.dataSourceSetting.data = SETTING;

    console.log('dataSourceReports', this.dataSourceReports);
  }
  ngOnInit(): void {
    this.role = AppComponent.role_admin || AppComponent.role_super_admin;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  expanded = true;
  selected = '';

  goTohome() {
    this.router.navigate(['dashboard']);
  }
  getComponent(item) {
    this.selected = TREE_DATA[0].name + item;
    if (item == "Product") {
      this.router.navigate(['dashboard/products']);
    }
    if (item == "Supplier") {
      this.router.navigate(['dashboard/suppliers-list']);
    }
    if (item == "Customer") {
      this.router.navigate(['dashboard/customers-list']);
    }
  }

  getOrder(item) {
    this.selected = Order_DATA[0].name + item;
    if (item == "Order") {
      this.router.navigate(['dashboard/salesOrder']);
    }
    if (item === "Transactions") {
      this._redirectToPage('dashboard/sales-report');
    }
    if (item === "Dues") {
      this._redirectToPage('dashboard/balance-sheet');
    }
  }

  getReports(item) {
    this.selected = REPORTS[0].name + item;
    if (item == "Order") {
      this.router.navigate(['dashboard/purchaseOrder']);
    }
    if (item === "Transactions") {
      this._redirectToPage('dashboard/purchase-report');
    }
    if (item === "Dues") {
      this._redirectToPage('dashboard/supplier-balance-sheet');
    }
  }

  getSummary(item) {
    this.selected = SUMMARY[0].name + item;
    if (item === "Daily Summary") {
      this._redirectToPage('dashboard/profit-summary');
    }
    if (item === "Product Summary") {
      this._redirectToPage('dashboard/product-summary');
    }
    if (item === "Stock Book") {
      this._redirectToPage('dashboard/stock-book');
    }
  }

  getSetting(item) {
    this.selected = SETTING[0].name + item;
    if (item === "Registration") {
      this._redirectToPage('dashboard/register');
    }
    if (item === "Update Bank") {
      this._redirectToPage('dashboard/updateBankDetails');
    }
  }

  private _redirectToPage(route) {
    this.router.navigate([route]);
  }
}

interface MasterNode {
  name: string;
  children?: MasterNode[];
}

const Order_DATA: MasterNode[] = [
  {
    name: 'SALES',
    children: [
      {
        name: 'Order',
      },
      {
        name: 'Transactions',
      },
      {
        name: 'Dues',
      }
    ]
  },
];

const REPORTS: MasterNode[] = [
  {
    name: 'PURCHASE',
    children: [
      {
        name: 'Order',
      },
      {
        name: 'Transactions',
      },
      {
        name: 'Dues',
      }
    ]
  },
];

const SUMMARY: MasterNode[] = [
  {
    name: 'SUMMARY',
    children: [
      {
        name: 'Product Summary',
      },
      {
        name: 'Daily Summary',
      },
      {
        name: 'Stock Book',
      }
    ]
  },
];

const SETTING: MasterNode[] = [
  {
    name: 'SETTING',
    children: [
      {
        name: 'Registration',
      },
      {
        name: 'Update Bank',
      },
    ]
  },
];

const TREE_DATA: MasterNode[] = [
  {
    name: 'DATA',
    children: [
      {
        name: 'Product',
      }, {
        name: 'Supplier',
      }, {
        name: 'Customer',
      }
    ]
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
