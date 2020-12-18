import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Directive } from '@angular/core';
import { SortColumn, SortDirection, SortEvent } from '../_model/product';

@Directive({
  selector: '[appSorttabel]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SorttabelDirective {

  constructor() { }
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    const rotate: { [key: string]: SortDirection } = {
      asc: 'desc',
      desc: '',
      '': 'asc'
    };
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }

}
