import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBalanceSheetComponent } from './customer-update-balance-sheet.component';

describe('UpdateBalanceSheetComponent', () => {
  let component: UpdateBalanceSheetComponent;
  let fixture: ComponentFixture<UpdateBalanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBalanceSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
