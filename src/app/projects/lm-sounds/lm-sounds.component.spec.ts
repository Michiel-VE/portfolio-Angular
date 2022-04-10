import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LMSoundsComponent} from './lm-sounds.component';

describe('LMSoundsComponent', () => {
  let component: LMSoundsComponent;
  let fixture: ComponentFixture<LMSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LMSoundsComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LMSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
