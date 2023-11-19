import {Component, inject, Input} from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable } from "rxjs";
import {EmbaucheService} from "../services/embauche.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import { Personne } from "../model/personne";

@Component({
selector: "app-card",
templateUrl: "./card.component.html",
styleUrls: ["./card.component.css"],
})
export class CardComponent {
cv$: Observable<Personne>;
constructor(private cvService: CvService, private embaucheService: EmbaucheService,private toastr: ToastrService) {
this.cv$ = this.cvService.selectCv$;
}
router=inject(Router);
embaucherCv(cv: Personne) {
// toast thing
if(!this.embaucheService.embaucher(cv)){
this.toastr.error('Ce cv est déjà sélectionné');
return;
}
this.toastr.success('Okay');
}
redirect(id:number){
this.router.navigate(['cv',id]);
}

}
