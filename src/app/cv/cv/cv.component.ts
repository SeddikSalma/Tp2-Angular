import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable, distinctUntilChanged, map } from "rxjs";
import { EmbaucheService } from "../services/embauche.service";
import { Personne } from "../model/personne";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  nb = 0;
  everybody$: Observable<Personne[]>;

  constructor(private cvService: CvService, private toastr: ToastrService) {
    this.everybody$ = this.cvService.getPersonnesFromApi();

    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
  }
}
