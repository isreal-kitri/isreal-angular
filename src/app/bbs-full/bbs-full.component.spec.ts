import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbsFullComponent } from './bbs-full.component';

describe('BbsFullComponent', () => {
  let component: BbsFullComponent;
  let fixture: ComponentFixture<BbsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
