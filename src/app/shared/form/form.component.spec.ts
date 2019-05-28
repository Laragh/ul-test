import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#returnFactorial() should return correct factorial value', () => {
    component.number.setValue(10);
    component.returnFactorial();
    expect(component.factorialAnswer).toBe(3628800);
    expect(component.factorialAnswer).not.toBe(10);
  });

  it('#form should validate negative number', () => {
    component.number.setValue(-1);
    expect(component.number.errors).toBeTruthy();
  });

  it('#form should validate NAN', () => {
    component.number.setValue('2wa');
    expect(component.number.errors).toBeTruthy();
  });

  // uncomment below to trigger test fails for purpose of testing these tests
  // it('#form should validate NAN', () => {
  //   component.number.setValue('2wa');
  //   expect(component.number.errors).toBeFalsy();
  // });

  // it('#returnFactorial() should fail factorial value', () => {
  //   component.number.setValue(20);
  //   component.returnFactorial();
  //   expect(component.factorialAnswer).toBe(3628800);
  // });

});
