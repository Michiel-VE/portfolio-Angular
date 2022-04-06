import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakreinigingLMComponent } from './dakreiniging-lm.component';

describe('DakreinigingLMComponent', () => {
  let component: DakreinigingLMComponent;
  let fixture: ComponentFixture<DakreinigingLMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakreinigingLMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DakreinigingLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
