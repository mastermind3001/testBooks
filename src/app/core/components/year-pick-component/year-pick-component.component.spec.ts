import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPickComponentComponent } from './year-pick-component.component';

describe('YearPickComponentComponent', () => {
  let component: YearPickComponentComponent;
  let fixture: ComponentFixture<YearPickComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearPickComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearPickComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
