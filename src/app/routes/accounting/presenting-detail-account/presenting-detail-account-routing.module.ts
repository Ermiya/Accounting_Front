import { PresentingDetailMainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingLegalAndNaturalPersonComponent } from './adding-legal-and-natural-person/adding-legal-and-natural-person.component';

const routes: Routes = [
  { path: '', component: PresentingDetailMainComponent },
  {
    path: 'legal_and_natural_person', component: AddingLegalAndNaturalPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentingDetailRoutingModule { }
