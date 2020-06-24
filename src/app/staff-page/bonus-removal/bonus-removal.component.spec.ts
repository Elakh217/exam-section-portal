import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusRemovalComponent } from './bonus-removal.component';

describe('BonusRemovalComponent', () => {
  let component: BonusRemovalComponent;
  let fixture: ComponentFixture<BonusRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
