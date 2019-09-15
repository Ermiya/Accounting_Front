import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceYearSelectMainComponent } from './main.component';

describe('FinanceYearSelectMainComponent', () => {
  let component: FinanceYearSelectMainComponent;
  let fixture: ComponentFixture<FinanceYearSelectMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceYearSelectMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceYearSelectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
