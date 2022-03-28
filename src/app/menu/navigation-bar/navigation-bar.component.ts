import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  userType;

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username')
    if (this.super_admin === true) {
      this.userType = 'Owner';
    } else if (this.admin === true) {
      this.userType = 'Manager';
    } else {
      this.userType = 'Operator';
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  openDialog() {
    //this.router.navigate(['dashboard/register']);
    alert('Need to implement pop up for update password\n by default username should populate and it should be non editable mode and password should be blank and update button')
    let data = {
      "username": this.username,
      "password": '123', // currentlyt hard coded
    };
    this.auth.updateUser(data).subscribe();
  }

  updateBankDetails() {
    this.router.navigate(['dashboard/updateBankDetails']);
  }
}
