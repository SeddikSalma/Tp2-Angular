import { Injectable } from '@angular/core';
import { Personne } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvsEmbauche: Personne[] = [];

  constructor() { }

  embaucher(cv: Personne | boolean) {
    const index = this.cvsEmbauche.indexOf(cv as Personne);
    if (index === -1) {
      this.cvsEmbauche.push(cv as Personne);
      return true;
    } else {
      return false;
    }
  }

  getAllEmbauches() {
    return this.cvsEmbauche;
  }



}
