import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {
  cvsS$: Observable<Personne[]> = of([]);
  cvsJ$: Observable<Personne[]> = of([]);
  cvs$: Observable<Personne[]> = of([])
  SelectedJunior = true;

  @Input({
    required: true
  })
  set cvlist(data: Personne[] | null) {
    if (data) this.updateDisplay(of(data));
  }

  cvService = inject(CvService);

  onCvClick() {
    return (cv: Personne) => {
      this.cvService.selectCv(cv)
    }
  }

  updateDisplay(data$: Observable<Personne[]>) {
    this.cvs$ = data$;

    this.cvsJ$ = this.cvs$?.pipe(
      map((personne) => {
        return personne.filter(p => p.age < 40)
      })
    ) ?? of([]);

    this.cvsS$ = this.cvs$?.pipe(
      map((personne) => {
        return personne.filter(p => p.age >= 40)
      })
    ) ?? of([]);
  }

  changeSelected(yes: boolean) {
    this.SelectedJunior = yes;
  }
}
