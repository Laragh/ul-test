import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ul-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('numberInput') numberField: ElementRef;
  constructor() { }

  number = new FormControl(0, Validators.pattern('^[1-9]+[0-9]*$'));
  factorialAnswer = 0;

  ngOnInit() {
    // autofocus element for user
    this.numberField.nativeElement.focus();
    // update onscreen text content on input change
    // so answer displayed is removed if number value has changed
    this.number.valueChanges.subscribe(val => {
      this.factorialAnswer = 0;
    });
  }

  // The factorial function (symbol: !) says to multiply all whole numbers 
  // from our chosen number down to 1.

  getFactorial = numberInput =>
    // check if numberInput-1 is more than 0
    numberInput - 1 > 0 ?
      // if true multiply all whole numbers
      // from our input number down to 1
      numberInput * this.getFactorial(numberInput - 1) :
      // if false return numberInput/stop
      numberInput

  // (click) function to return factorial answer
  returnFactorial() {
    this.factorialAnswer = this.getFactorial(this.number.value);
  }

}
