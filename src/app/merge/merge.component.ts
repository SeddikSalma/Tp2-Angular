import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, combineLatest, distinctUntilChanged, filter, map, merge, reduce, scan, tap, withLatestFrom } from 'rxjs';

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

  val1Subject = new Subject<number>()
  val1$: Observable<number> = this.val1Subject.asObservable()

  val2Subject = new Subject<number>()
  val2$: Observable<number> = this.val2Subject.asObservable()

  merge$: Observable<number>
  scan$: Observable<number>
  reduce$: Observable<number>

  constructor() {
    this.focus$.pipe(
      withLatestFrom(this.input1.valueChanges),
      map(([_, vals]) => {
        return parseInt(vals ?? "0")
      }),
      distinctUntilChanged(),
      tap((value) => this.val1Subject.next(value))
    ).subscribe()

    this.focus$.pipe(
      withLatestFrom(this.input2.valueChanges),
      map(([_, vals]) => {
        return parseInt(vals ?? "0")
      }),
      distinctUntilChanged(),
      tap((value) => this.val2Subject.next(value))
    ).subscribe()

    this.merge$ = merge(
      this.val1$,
      this.val2$,
    )

    this.scan$ = this.merge$.pipe(
      scan((prev, curr) => curr + prev, 0)
    )

    this.reduce$ = this.merge$.pipe(
      reduce((prev, curr) => curr + prev, 0)
    )
  }

  finishStream1() {
    this.val1Subject.complete()
  }

  finishStream2() {
    this.val2Subject.complete()
  }

  focusOut() {
    this.focusSubject.next(1)
  }
}

