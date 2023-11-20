import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { Personne } from '../model/personne';

@Component({
  selector: 'app-specific-cv',
  templateUrl: './specific-cv.component.html',
  styleUrls: ['./specific-cv.component.css']
})
export class SpecificCvComponent {
  cv: Personne
  private http = inject(HttpClient);
  router: Router = inject(Router);
  private toast = inject(ToastrService);

  constructor(private route: ActivatedRoute) {
    this.cv = this.route.snapshot.data['cv']
  }

  deleteCv(id: number) {
    this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`).subscribe(
      () => {
        this.toast.success('Cv supprimé avec succès');
        this.router.navigate(['/cv']);
      },
      (error) => {
        this.toast.error('Erreur lors de la suppression du cv');
        setTimeout(() => {
          this.router.navigate(['/cv']);
        }, 2000);
      }
    );
  }


}
