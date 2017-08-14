import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMountainComponent } from './main-mountain.component';

describe('MainMountainComponent', () => {
  let component: MainMountainComponent;
  let fixture: ComponentFixture<MainMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
