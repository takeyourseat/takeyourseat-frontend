import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplacesComponent } from './allplaces.component';

describe('AllplacesComponent', () => {
  let component: AllplacesComponent;
  let fixture: ComponentFixture<AllplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
