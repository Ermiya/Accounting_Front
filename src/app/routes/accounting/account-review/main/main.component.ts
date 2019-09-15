import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-accounting-account-review',
  templateUrl: './main.component.html',
})
export class AccountingAccountReviewMainComponent implements OnInit {

  form: FormGroup;
  error = '';
  type = 0;

  constructor() {
    // this.form = fb.group({
    //   serialVal: [null, [Validators.required, Validators.minLength(4)]],
    //   nameVal: [null, Validators.required],
    //   familyNameVal: [null, Validators.required],
    //   birthDayVal: [null, Validators.required],
    //   someVal: [null, Validators.required],
    //   telephoneVal: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
    //   mobileVal: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
    // });
  }

  ngOnInit() { }

  isMainGridFunc() {
    // return this.isMainGrid;
  }
  changeState() {
    // this.isMainGrid = !this.isMainGrid;
  }

}
