import {Component, OnInit} from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable, distinctUntilChanged, map } from "rxjs";
import {EmbaucheService} from "../services/embauche.service";
import {Personne} from "../model/personne";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent  {
  nb = 0;
  cvsS$: Observable<Personne[]>;
  cvsJ$: Observable<Personne[]>;
  SelectedJunior=true;
  everybody$:Observable<Personne[]>;
  constructor(private cvService: CvService,private toastr: ToastrService) {
    this.everybody$=  this.cvService.getPersonnesFromApi();
    this.cvsJ$=this.everybody$.pipe(
      map((personne)=>{
        return personne.filter(p=> p.age<40)
      })
    );
    this.cvsS$=this.everybody$.pipe(
      map((personne)=>{
        return personne.filter(p=> p.age>=40)
      })
    );
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
  }

  changeSelected(yes:boolean){
    this.SelectedJunior=yes;
    
    
  }




}
