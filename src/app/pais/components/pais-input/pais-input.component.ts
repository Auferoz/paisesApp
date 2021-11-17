import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dbouncer: Subject<string> = new Subject();

  termino: string = '';
  
  ngOnInit(): void {
    this.dbouncer
        .pipe(
          debounceTime(300)
        )
        .subscribe( valor => {
          this.onDebounce.emit( valor );
        });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
      this.dbouncer.next( this.termino );
  }

}
