
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { UserLoginComponent } from './passport/login/login.component';

const routes: Routes = [
  { path: 'passport/login', component: UserLoginComponent },
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    canActivateChild: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      {
        path: 'applicants-register',
        loadChildren: () =>
          import('./applicants-registration/applicants-registration.module').then(m => m.ApplicantsRegistrationModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },
      {
        path: 'accounting/accounting_document',
        loadChildren: () =>
          import('./accounting/accounting-documents/accounting-documents.module').then(m => m.AccountingDocumentsModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },
      {
        path: 'accounting/account_review',
        loadChildren: () =>
          import('./accounting/account-review/accounting-account-review.module').then(m => m.AccountingAccountReviewModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },

      {
        path: 'accounting/presenting_detail_account',
        loadChildren: () =>
          import('./accounting/presenting-detail-account/presenting-detail-account.module').then(m => m.PresentingDetailModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },
      {
        path: 'accounting/presenting_helper_account',
        loadChildren: () =>
          import('./accounting/presenting-helper-account/presenting-helper-account.module').then(m => m.PresentingHelperAccountModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },
      {
        path: 'accounting/document_struct',
        loadChildren: () =>
          import('./accounting/document-struct/document-struct.module').then(m => m.DocumentStructModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },


      {
        path: 'accounting/accounting_document_control',
        loadChildren: () =>
          import('./accounting/accounting-document-control/accounting-document-control.module').then(m => m.AccountingDocumentControlModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }, {
        path: 'accounting/accounting_document_finalize',
        loadChildren: () =>
          import('./accounting/accounting-document-finalize/accounting-document-finalize.module').then(m => m.AccountingDocumentFinalizeModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }, {
        path: 'accounting/document_type',
        loadChildren: () =>
          import('./accounting/document-type/document-type.module').then(m => m.DocumentTypeModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }, {
        path: 'accounting/end_year_document',
        loadChildren: () =>
          import('./accounting/end-year-document/end-year-document.module').then(m => m.EndYearDocumentModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }, {
        path: 'accounting/finance_year_select',
        loadChildren: () =>
          import('./accounting/finance-year-select/finance-year-select.module').then(m => m.FinanceYearSelectModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }, {
        path: 'accounting/issuance_reason',
        loadChildren: () =>
          import('./accounting/issuance-reason/issuance-reason.module').then(m => m.IssuanceReasonModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      }

    ],
  },

  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
