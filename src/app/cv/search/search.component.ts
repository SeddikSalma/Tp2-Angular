import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  name = new FormControl('');
  searchResult$: Observable<Personne[]> | undefined
  router = inject(Router);

  constructor(private cvService: CvService) {
    this.searchResult$ = this.name.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((search) => {
        return this.cvService.searchPersonnes(search ?? "")
      })
    )
  }

  onSearchItemClickHandler() {
    return (personne: Personne) => {
      this.router.navigate(['cv', personne.id]);
    }
  }
}
