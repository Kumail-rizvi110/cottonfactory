import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmanagerListComponent } from './setmanager-list.component';

describe('SetmanagerListComponent', () => {
  let component: SetmanagerListComponent;
  let fixture: ComponentFixture<SetmanagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetmanagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetmanagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
