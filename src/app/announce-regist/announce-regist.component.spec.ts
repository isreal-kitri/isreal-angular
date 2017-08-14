import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceRegistComponent } from './announce-regist.component';

describe('AnnounceRegistComponent', () => {
  let component: AnnounceRegistComponent;
  let fixture: ComponentFixture<AnnounceRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
