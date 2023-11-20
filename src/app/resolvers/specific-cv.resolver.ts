import { ResolveFn } from '@angular/router';
import { Personne } from '../cv/model/personne';
import { Observable } from 'rxjs';
import { CvService } from '../cv/services/cv.service';
import { inject } from '@angular/core';

export const specificCvResolver: ResolveFn<Personne | undefined> = (route, state) => {
  const cvService: CvService = inject(CvService)
  return cvService.getPersonne(parseInt(route.params['id']));
};
