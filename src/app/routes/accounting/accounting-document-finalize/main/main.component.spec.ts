import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountingDocumentFinalizeMainComponent } from './main.component';

describe('AccountingDocumentFinalizeMainComponent', () => {
  let component: AccountingDocumentFinalizeMainComponent;
  let fixture: ComponentFixture<AccountingDocumentFinalizeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingDocumentFinalizeMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingDocumentFinalizeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
