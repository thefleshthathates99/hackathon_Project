import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobModalPage } from './job-modal.page';

describe('JobModalPage', () => {
  let component: JobModalPage;
  let fixture: ComponentFixture<JobModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
