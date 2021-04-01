import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {Component} from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
    constructor(private auth: AuthService, private router: Router) {
    }

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    }
}
