import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerverageRaterComponent } from './berverage-rater.component';

describe('BerverageRaterComponent', () => {
  let component: BerverageRaterComponent;
  let fixture: ComponentFixture<BerverageRaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerverageRaterComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerverageRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
