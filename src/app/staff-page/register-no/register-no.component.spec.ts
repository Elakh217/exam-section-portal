import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNoComponent } from './register-no.component';

describe('RegisterNoComponent', () => {
  let component: RegisterNoComponent;
  let fixture: ComponentFixture<RegisterNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
