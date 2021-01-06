import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent {

  expanded = false;
constructor(private router:Router){

}
  goTohome(){
    this.router.navigate(['dashboard']);
  }
}
