import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {ActionBarComponent} from './action-bar/action-bar.component';
import {ActionBarItemComponent} from './action-bar-item/action-bar-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [NavigationBarComponent, ActionBarComponent, ActionBarItemComponent],
    declarations: [NavigationBarComponent, ActionBarComponent, ActionBarItemComponent]
})
export class SharedModule {
}
