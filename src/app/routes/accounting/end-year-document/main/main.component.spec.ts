import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EndYearDocumentMainComponent } from './main.component';

describe('EndYearDocumentMainComponent', () => {
  let component: EndYearDocumentMainComponent;
  let fixture: ComponentFixture<EndYearDocumentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndYearDocumentMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndYearDocumentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
