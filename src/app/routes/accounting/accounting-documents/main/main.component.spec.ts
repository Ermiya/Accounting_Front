import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountingDocumentsMainComponent } from './main.component';

describe('AccountingDocumentsMainComponent', () => {
  let component: AccountingDocumentsMainComponent;
  let fixture: ComponentFixture<AccountingDocumentsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingDocumentsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingDocumentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
