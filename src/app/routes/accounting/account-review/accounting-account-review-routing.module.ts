import { AccountingAccountReviewMainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { AccountAnalyzeComponent } from './account-analyze/account-analyze.component';

const routes: Routes = [
  {
    path: '', component: AccountingAccountReviewMainComponent
  },
  // {
  //   path: 'account_analyze', component: AccountAnalyzeComponent,
  // },


  {
    path: 'document-detail', component: DocumentDetailComponent,
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingAccountReviewRoutingModule { }
