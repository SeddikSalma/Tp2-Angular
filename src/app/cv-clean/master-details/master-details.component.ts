import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../personne.model';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent {

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
