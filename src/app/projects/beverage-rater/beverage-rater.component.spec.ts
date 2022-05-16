import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageRaterComponent } from './beverage-rater.component';

describe('BerverageRaterComponent', () => {
  let component: BeverageRaterComponent;
  let fixture: ComponentFixture<BeverageRaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeverageRaterComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeverageRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
