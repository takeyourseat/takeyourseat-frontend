import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacerequestformComponent } from './placerequestform.component';

describe('PlacerequestformComponent', () => {
  let component: PlacerequestformComponent;
  let fixture: ComponentFixture<PlacerequestformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacerequestformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacerequestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
