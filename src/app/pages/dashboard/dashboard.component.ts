import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    isVisible = false;
    urlPath = [];

    constructor(
        private router: Router
    ) {
    }

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
