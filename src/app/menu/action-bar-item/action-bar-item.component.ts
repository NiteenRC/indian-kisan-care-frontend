import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-action-bar-item',
    templateUrl: './action-bar-item.component.html',
    styleUrls: ['./action-bar-item.component.css']
})
export class ActionBarItemComponent {
    @Input() shadow: boolean = false;
}
