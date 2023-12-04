import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { CvService } from '../cv.service';
import { Personne } from '../personne.model';

export const cvsResolver: ResolveFn<Observable<Personne[]>> = (route, state) => {
  const cvService: CvService = inject(CvService)

  return cvService.getPersonnesFromApi();
};
