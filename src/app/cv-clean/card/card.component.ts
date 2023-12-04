import { Component, inject, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { CvService } from "../cv.service";
import { Personne } from "../personne.model";
import { EmbaucheService } from "../embauche.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv$: Observable<Personne>;
  private cvService: CvService = inject(CvService)
  private embaucheService: EmbaucheService = inject(EmbaucheService)
  private toastr: ToastrService = inject(ToastrService)

  constructor() {
    this.cv$ = this.cvService.selectCv$;
  }
  router = inject(Router);
  embaucherCv(cv: Personne) {
    // toast thing
    if (!this.embaucheService.embaucher(cv)) {
      this.toastr.error('Ce cv est déjà sélectionné');
      return;
    }
    this.toastr.success('Okay');
  }
  redirect(id: number) {
    this.router.navigate(['cv', id]);
  }

}
