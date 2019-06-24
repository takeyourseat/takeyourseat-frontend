import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedplaceComponent } from './requestedplace.component';

describe('RequestedplaceComponent', () => {
  let component: RequestedplaceComponent;
  let fixture: ComponentFixture<RequestedplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
