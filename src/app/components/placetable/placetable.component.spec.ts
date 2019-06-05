import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacetableComponent } from './placetable.component';

describe('PlacetableComponent', () => {
  let component: PlacetableComponent;
  let fixture: ComponentFixture<PlacetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
