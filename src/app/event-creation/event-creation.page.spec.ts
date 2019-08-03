import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationPage } from './event-creation.page';

describe('EventCreationPage', () => {
  let component: EventCreationPage;
  let fixture: ComponentFixture<EventCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
