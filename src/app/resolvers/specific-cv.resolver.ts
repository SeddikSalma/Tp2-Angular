import { ResolveFn } from '@angular/router';

export const specificCvResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
