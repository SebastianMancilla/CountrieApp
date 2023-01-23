import { Component } from '@angular/core';
import { Countrie } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../service/countrie.service';

@Component({
  selector: 'app-for-countrie',
  templateUrl: './for-countrie.component.html',
  styles: [`
    li{cursor: pointer;}
  `
  ]
})
export class ForCountrieComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Countrie[] = [];
  countriesSuggested: Countrie[] = [];
  showSuggestions: boolean = false;


  constructor(private countrieService: CountrieService) { }

  search(term: string) {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = false;


    this.countrieService.searchCountrie(this.term)
      .subscribe({
        next: (countries) => {
          console.log(countries);
          this.countries = countries;
        },
        error: (err) => {
          this.hasError = true;
          this.countries = [];
        }
      });

  }

  suggestions(term: string) {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = true;

    this.countrieService.searchCountrie(term)
      .subscribe({
        next: countries =>  this.countriesSuggested = countries.splice(0, 5),
        error: error => this.countriesSuggested = []
      });
  }

}