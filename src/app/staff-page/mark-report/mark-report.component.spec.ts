import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkReportComponent } from './mark-report.component';

describe('MarkReportComponent', () => {
  let component: MarkReportComponent;
  let fixture: ComponentFixture<MarkReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
