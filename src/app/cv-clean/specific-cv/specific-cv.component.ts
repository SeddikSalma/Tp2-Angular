import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Personne } from '../personne.model';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-specific-cv',
  templateUrl: './specific-cv.component.html',
  styleUrls: ['./specific-cv.component.css']
})
export class SpecificCvComponent {
  //cv: Personne
  cv$: Observable<Personne>
  router: Router = inject(Router);
  private toast = inject(ToastrService);
  cvService = inject(CvService);

  constructor(private route: ActivatedRoute) {
    this.cv$ = this.route.data.pipe(
      map((data) => {
        return data['cv']
      })
    )
  }

  deleteCv(id: number) {
    this.cvService.deletePersonne(id).pipe(
      tap(() => {
        this.toast.success('Cv supprimé avec succès');
        this.router.navigate(['/cv']);
      }),
      catchError(() => {
        this.toast.error('Erreur lors de la suppression du cv');
        setTimeout(() => {
          this.router.navigate(['/cv']);
        }, 2000);
        return of()
      })
    ).subscribe()
  }
}
