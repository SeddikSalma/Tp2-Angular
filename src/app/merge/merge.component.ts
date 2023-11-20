import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, map, merge, pipe, reduce, scan, tap, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})

export class MergeComponent {

  input1 = new FormControl(0);
  input2 = new FormControl(0);

  focusSubject1$ = new Subject<number>()
  focusSubject2$ = new Subject<number>()

  merge$: Observable<number>
  scan$: Observable<number>
  reduce$: Observable<number>

  constructor() {
      this.merge$ = merge(
        this.focusSubject1$,this.focusSubject2$).pipe(
         map(curr=>curr)
      )

      this.scan$ = this.merge$.pipe(
         scan((prev, curr) => curr + prev, 0)
      )

      this.reduce$ = this.merge$.pipe(
         reduce((prev, curr) => curr + prev, 0)
      )
  }

  changeStreamOneValue(){
    if(this.input1.value)
      this.focusSubject1$.next(this.input1.value)
  }
  changeStreamTwoValue(){
    if(this.input2.value)
      this.focusSubject2$.next(this.input2.value)
  }

  finishStream1() {
    this.focusSubject1$.complete()
  }

  finishStream2() {
    this.focusSubject2$.complete()
  }


}

