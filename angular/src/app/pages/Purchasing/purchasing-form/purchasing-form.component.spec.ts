import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingFormComponent } from './purchasing-form.component';

describe('PurchasingFormComponent', () => {
  let component: PurchasingFormComponent;
  let fixture: ComponentFixture<PurchasingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
