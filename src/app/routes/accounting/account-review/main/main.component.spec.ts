import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountingAccountReviewMainComponent } from './main.component';

describe('AccountingAccountReviewMainComponent', () => {
  let component: AccountingAccountReviewMainComponent;
  let fixture: ComponentFixture<AccountingAccountReviewMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingAccountReviewMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingAccountReviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
