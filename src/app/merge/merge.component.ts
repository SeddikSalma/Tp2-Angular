import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, combineLatest, filter, map, merge, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent {
  input1 = new FormControl('');
  input2 = new FormControl('');
  focusSubject = new Subject<number>()
  focus$ = this.focusSubject.asObservable()

  val1$: Observable<number>
  val2$: Observable<number>

  merge$: Observable<[string|null, string|null]>

  constructor(){
    this.val1$ = this.input1.valueChanges.pipe(
      withLatestFrom(this.focus$),
      map(([vals, _]) => {
        return parseInt(vals ?? "0")
      }),
    )

    this.val2$ = this.input1.valueChanges.pipe(
      withLatestFrom(this.focus$),
      map(([vals, _]) => {
        return parseInt(vals ?? "0")
      }),
    )

    this.merge$ = merge(
      this.val1$,
      this.val2$
    )
  }

  focusOut(event: FocusEvent) {
    this.focusSubject.next(1)
  }
}

