
// angular components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

// intra components
import { AccountingDocumentsRoutingModule } from './accounting-documents-routing.module';
import { AccountingDocumentsMainComponent } from './main/main.component';

// added components
import { NzFormModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [AccountingDocumentsMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTableModule,
    NzCheckboxModule,
    SharedModule,
    AccountingDocumentsRoutingModule


  ]
})
export class AccountingDocumentsModule { }
