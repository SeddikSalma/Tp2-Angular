import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, combineLatest, distinctUntilChanged, filter, map, merge, scan, tap, withLatestFrom } from 'rxjs';

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

  merge$: Observable<number>
  scan$: Observable<number>

  constructor() {
    this.val1$ = this.focus$.pipe(
      withLatestFrom(this.input1.valueChanges),
      map(([_, vals]) => {
        return parseInt(vals ?? "0")
      }),
      distinctUntilChanged()
    )

    this.val2$ = this.focus$.pipe(
      withLatestFrom(this.input2.valueChanges),
      map(([_, vals]) => {
        return parseInt(vals ?? "0")
      }),
      distinctUntilChanged()
    )

    this.merge$ = merge(
      this.val1$,
      this.val2$,
    )

    this.scan$ = this.merge$.pipe(
      scan((prev, curr) => curr + prev, 0)
    )
  }

  focusOut(event: FocusEvent) {
    console.log(1)
    this.focusSubject.next(1)
  }
}

