import { Component, OnInit, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable, distinctUntilChanged, map } from "rxjs";
import { EmbaucheService } from "../services/embauche.service";
import { Personne } from "../model/personne";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  nb = 0;
  allPersonnes: Personne[];
  private cvService: CvService = inject(CvService)
  private router: ActivatedRoute = inject(ActivatedRoute)

  constructor() {
    this.allPersonnes = this.router.snapshot.data['cvs']

    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
  }
}
