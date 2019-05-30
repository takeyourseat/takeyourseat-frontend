import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacemarkerComponent } from './placemarker.component';

describe('PlacemarkerComponent', () => {
  let component: PlacemarkerComponent;
  let fixture: ComponentFixture<PlacemarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacemarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacemarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
