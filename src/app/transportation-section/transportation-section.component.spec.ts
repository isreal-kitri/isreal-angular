import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationSectionComponent } from './transportation-section.component';

describe('TransportationSectionComponent', () => {
  let component: TransportationSectionComponent;
  let fixture: ComponentFixture<TransportationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
