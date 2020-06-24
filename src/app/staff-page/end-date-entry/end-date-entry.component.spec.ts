import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDateEntryComponent } from './end-date-entry.component';

describe('EndDateEntryComponent', () => {
  let component: EndDateEntryComponent;
  let fixture: ComponentFixture<EndDateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndDateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
