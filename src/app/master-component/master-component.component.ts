import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Personne } from '../cv/model/personne';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-master-component',
  templateUrl: './master-component.component.html',
  styleUrls: ['./master-component.component.css']
})
export class MasterComponentComponent {
  cvs$: Observable<Personne[]>
  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.cvs$ = this.route.data.pipe(
      map((data) => {
        return data['cvs']
      })
    )
  }

  onCvClick() {
    return (cv: Personne) => {
      this.router.navigate(['cv', 'list', cv.id])
    }
  }
}
