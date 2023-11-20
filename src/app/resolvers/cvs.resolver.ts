import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../cv/services/cv.service';
import { Observable } from 'rxjs';
import { Personne } from '../cv/model/personne';

export const cvsResolver: ResolveFn<Observable<Personne[]>> = (route, state) => {
  const cvService: CvService = inject(CvService)

  return cvService.getPersonnesFromApi();
};
