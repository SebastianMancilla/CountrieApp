import { Component } from '@angular/core';
import { Countrie } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../service/countrie.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent {
term: string = '';
hasError: boolean = false;
countries: Countrie[] = [];

constructor(private countrieService: CountrieService) {}
  search(term: string){
    this.hasError = false;
    this.term = term;

    this.countrieService.searchCapital(term)
      .subscribe({
        next: (countries) =>{
          this.countries = countries;
        },
        error: (err) =>{
          this.hasError = true;
          this.countries = [];
        }
      })
  }

}
