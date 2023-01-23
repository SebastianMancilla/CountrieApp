import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countrie-input',
  templateUrl: './countrie-input.component.html',
  styles: [
  ]
})
export class CountrieInputComponent implements OnInit {
  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  search() {
    this.onEnter.emit(this.term);

  }

  keyPress() {
    this.debouncer.next(this.term);
  }
}
