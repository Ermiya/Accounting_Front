import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddingLegalAndNaturalPersonComponent } from './adding-legal-and-natural-person.component';

describe('AddingLegalAndNaturalPersonComponent ', () => {
  let component: AddingLegalAndNaturalPersonComponent;
  let fixture: ComponentFixture<AddingLegalAndNaturalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddingLegalAndNaturalPersonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingLegalAndNaturalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
