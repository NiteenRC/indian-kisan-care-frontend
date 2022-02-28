import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankInfoComponent } from './update-bank-info.component';

describe('UpdateBankInfoComponent', () => {
  let component: UpdateBankInfoComponent;
  let fixture: ComponentFixture<UpdateBankInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBankInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
