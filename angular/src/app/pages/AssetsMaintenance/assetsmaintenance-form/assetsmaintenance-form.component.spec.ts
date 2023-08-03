import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmaintenanceFormComponent } from './assetsmaintenance-form.component';

describe('AssetsmaintenanceFormComponent', () => {
  let component: AssetsmaintenanceFormComponent;
  let fixture: ComponentFixture<AssetsmaintenanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsmaintenanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsmaintenanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
