import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuanceReasonMainComponent } from './main.component';

describe('IssuanceReasonMainComponent', () => {
  let component: IssuanceReasonMainComponent;
  let fixture: ComponentFixture<IssuanceReasonMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuanceReasonMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceReasonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
