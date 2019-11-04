import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeekerComponent } from './start-seeker.component';

describe('StartSeekerComponent', () => {
  let component: StartSeekerComponent;
  let fixture: ComponentFixture<StartSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
