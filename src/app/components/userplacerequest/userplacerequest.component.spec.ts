import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplacerequestComponent } from './userplacerequest.component';

describe('UserplacerequestComponent', () => {
  let component: UserplacerequestComponent;
  let fixture: ComponentFixture<UserplacerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplacerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplacerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
