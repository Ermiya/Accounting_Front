import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentTypeMainComponent } from './main.component';

describe('DocumentTypeMainComponent', () => {
  let component: DocumentTypeMainComponent;
  let fixture: ComponentFixture<DocumentTypeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTypeMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
