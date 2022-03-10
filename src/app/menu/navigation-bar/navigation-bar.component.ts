import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/registration/register/register.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  username: string;
  super_admin = AppComponent.role_super_admin;
  admin = AppComponent.role_admin;
  user = AppComponent.role_user;

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username')
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  openDialog() {
    this.router.navigate(['dashboard/register']);
  }
  
  updateBankDetails() {
    this.router.navigate(['dashboard/updateBankDetails']);
  }
}
