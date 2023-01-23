import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CountrieService } from '../../service/countrie.service';
import { Countrie } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-view-contrie',
  templateUrl: './view-contrie.component.html',
  styles: [
  ]
})
export class ViewContrieComponent implements OnInit {
  countrie!: Countrie;
  traductions!: string [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countrieService: CountrieService,
  ) { }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.countrieService.getCountrie4Alpha(id)
    //       .subscribe(countrie => {
    //         console.log(countrie);
    //       });
    //   });

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.countrieService.getCountrie4Alpha(id)),
        tap(console.log)
      )
      .subscribe(countrie => {
        this.countrie = countrie[0];
        this.traductions = countrie[0].translations;
      });

    
  }
}
