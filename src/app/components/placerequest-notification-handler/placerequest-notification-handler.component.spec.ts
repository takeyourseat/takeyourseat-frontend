import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacerequestNotificationHandlerComponent } from './placerequest-notification-handler.component';

describe('PlacerequestNotificationHandlerComponent', () => {
  let component: PlacerequestNotificationHandlerComponent;
  let fixture: ComponentFixture<PlacerequestNotificationHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacerequestNotificationHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacerequestNotificationHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
