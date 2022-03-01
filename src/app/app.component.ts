import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  static role_super_admin: boolean;
  static role_admin: boolean;
  static role_user: boolean;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      AppComponent.role_super_admin = this.roles.includes('ROLE_SUPER_ADMIN');
      AppComponent.role_admin = this.roles.includes('ROLE_ADMIN');
      AppComponent.role_user = this.roles.includes('ROLE_USER');
    }
  }
}
