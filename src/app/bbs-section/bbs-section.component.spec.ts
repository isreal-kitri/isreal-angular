import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbsSectionComponent } from './bbs-section.component';

describe('BbsSectionComponent', () => {
  let component: BbsSectionComponent;
  let fixture: ComponentFixture<BbsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
