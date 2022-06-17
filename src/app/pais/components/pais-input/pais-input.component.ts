import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit  {

  ngOnInit() {
  this.debouncer
  .pipe(
    debounceTime(300)
  )
  .subscribe( valor =>{
    this.onDebounce.emit(valor);
  })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input () placeholder: string = '';

  debouncer : Subject <string> = new Subject();

  termino: string = '';

  Buscar(){

    this.onEnter.emit( this.termino);
  }

  teclaPresionada() {
  this.debouncer.next(this.termino);
  }
}
