import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamchatSectionComponent } from './streamchat-section.component';

describe('StreamchatSectionComponent', () => {
  let component: StreamchatSectionComponent;
  let fixture: ComponentFixture<StreamchatSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamchatSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamchatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
