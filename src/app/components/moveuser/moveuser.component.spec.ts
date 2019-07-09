import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveuserComponent } from './moveuser.component';

describe('MoveuserComponent', () => {
  let component: MoveuserComponent;
  let fixture: ComponentFixture<MoveuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
