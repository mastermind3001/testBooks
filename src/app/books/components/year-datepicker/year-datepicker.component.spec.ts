import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDatepickerComponent } from './year-datepicker.component';

describe('YearDatepickerComponent', () => {
  let component: YearDatepickerComponent;
  let fixture: ComponentFixture<YearDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
