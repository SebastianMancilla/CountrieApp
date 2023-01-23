import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountrieComponent } from './pages/for-countrie/for-countrie.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ViewContrieComponent } from './pages/view-contrie/view-contrie.component';
import { RouterModule } from '@angular/router';
import { CountrieTableComponent } from './components/countrie-table/countrie-table.component';
import { CountrieInputComponent } from './components/countrie-input/countrie-input.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountrieComponent,
    ForRegionComponent,
    ViewContrieComponent,
    CountrieTableComponent,
    CountrieInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ForCapitalComponent,
    ForCountrieComponent,
    ForRegionComponent,
    ViewContrieComponent
  ]
})
export class CountrieModule { }
