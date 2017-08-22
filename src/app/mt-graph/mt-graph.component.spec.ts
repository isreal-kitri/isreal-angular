import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtGraphComponent } from './mt-graph.component';

describe('MtGraphComponent', () => {
  let component: MtGraphComponent;
  let fixture: ComponentFixture<MtGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
