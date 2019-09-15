import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentingDetailMainComponent } from './main.component';

describe('PresentingDetailMainComponent', () => {
  let component: PresentingDetailMainComponent;
  let fixture: ComponentFixture<PresentingDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentingDetailMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentingDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
