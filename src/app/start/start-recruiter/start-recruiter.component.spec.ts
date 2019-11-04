import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRecruiterComponent } from './start-recruiter.component';

describe('StartRecruiterComponent', () => {
  let component: StartRecruiterComponent;
  let fixture: ComponentFixture<StartRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
