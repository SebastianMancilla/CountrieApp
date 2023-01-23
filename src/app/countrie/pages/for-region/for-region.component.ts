import { Component } from '@angular/core';
import { Countrie } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../service/countrie.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
  ]
})
export class ForRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Countrie[] = [];

  constructor(private countrieService: CountrieService) {
    
  }

  getClassCss(region: string): string {
    return (region === this.activeRegion)
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  activateRegion(region: string) {
    if(region === this.activeRegion) {return}

    this.activeRegion = region;
    this.countries = [];

    this.countrieService.searchRegion(region)
      .subscribe(coutries => {this.countries = coutries})
  }
 
}
