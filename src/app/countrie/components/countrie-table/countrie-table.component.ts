import { Component, Input } from '@angular/core';

import { Countrie } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-countrie-table',
  templateUrl: './countrie-table.component.html',
  styles: [
  ]
})
export class CountrieTableComponent {
  @Input() countries: Countrie[] = [];
}
