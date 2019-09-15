import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentingHelperAccountMainComponent } from './main.component';

describe('PresentingHelperAccountMainComponent', () => {
  let component: PresentingHelperAccountMainComponent;
  let fixture: ComponentFixture<PresentingHelperAccountMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentingHelperAccountMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentingHelperAccountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
