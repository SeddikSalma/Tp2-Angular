import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CvService } from '../cv.service';
import { Personne } from '../personne.model';

export const specificCvResolver: ResolveFn<Observable<Personne>> = (route, state) => {
  const cvService: CvService = inject(CvService)
  return cvService.getPersonne(parseInt(route.params['id']));
};
