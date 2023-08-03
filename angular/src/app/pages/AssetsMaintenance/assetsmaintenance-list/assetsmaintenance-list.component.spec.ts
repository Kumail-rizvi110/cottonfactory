import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmaintenanceListComponent } from './assetsmaintenance-list.component';

describe('AssetsmaintenanceListComponent', () => {
  let component: AssetsmaintenanceListComponent;
  let fixture: ComponentFixture<AssetsmaintenanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsmaintenanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsmaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
