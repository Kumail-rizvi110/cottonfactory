import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmanagerFormComponent } from './setmanager-form.component';

describe('SetmanagerFormComponent', () => {
  let component: SetmanagerFormComponent;
  let fixture: ComponentFixture<SetmanagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetmanagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetmanagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
