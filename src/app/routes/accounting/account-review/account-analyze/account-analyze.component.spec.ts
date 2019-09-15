import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountAnalyzeComponent } from './main.component';

describe('AccountAnalyzeComponent', () => {
  let component: AccountAnalyzeComponent;
  let fixture: ComponentFixture<AccountAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountAnalyzeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
