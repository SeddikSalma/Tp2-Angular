import { Component, OnInit, inject } from "@angular/core";
import { Observable, distinctUntilChanged, map } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { Personne } from "../personne.model";
import { CvService } from "../cv.service";

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
