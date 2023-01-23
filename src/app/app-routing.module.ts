import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForCountrieComponent } from './countrie/pages/for-countrie/for-countrie.component';
import { ForRegionComponent } from './countrie/pages/for-region/for-region.component';
import { ForCapitalComponent } from './countrie/pages/for-capital/for-capital.component';
import { ViewContrieComponent } from './countrie/pages/view-contrie/view-contrie.component';

const routes: Routes = [
  {
    path: '',
    component: ForCountrieComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ForRegionComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: ForCapitalComponent,
    pathMatch: 'full',
  },
  {
    path: 'countrie/:id',
    component: ViewContrieComponent,
  },
  {
    path: '**', 
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
