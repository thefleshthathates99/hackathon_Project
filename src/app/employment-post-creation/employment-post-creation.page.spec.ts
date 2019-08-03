import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentPostCreationPage } from './employment-post-creation.page';

describe('EmploymentPostCreationPage', () => {
  let component: EmploymentPostCreationPage;
  let fixture: ComponentFixture<EmploymentPostCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentPostCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentPostCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
