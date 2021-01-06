import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.css']
})
export class DashboardCategoriesComponent implements OnInit {
  isVisible = false;
  urlPath = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   this.getCurrentPage();
  }

  getCurrentPage() {
    const path = this.router.url.split('/');
    if (path.length === 2 && path[1] === 'dashboard') {
      this.isVisible = true;
    }
    path.forEach((e) => {
      if (e !== '') {
        this.urlPath.push(e);
      }
    });
  }
}
