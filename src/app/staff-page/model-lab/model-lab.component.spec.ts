import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelLabComponent } from './model-lab.component';

describe('ModelLabComponent', () => {
  let component: ModelLabComponent;
  let fixture: ComponentFixture<ModelLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
