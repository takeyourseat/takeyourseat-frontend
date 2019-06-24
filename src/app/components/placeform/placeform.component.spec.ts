import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceformComponent } from './placeform.component';

describe('PlaceformComponent', () => {
  let component: PlaceformComponent;
  let fixture: ComponentFixture<PlaceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
