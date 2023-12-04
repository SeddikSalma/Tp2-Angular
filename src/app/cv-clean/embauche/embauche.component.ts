import { Component } from '@angular/core';
import { EmbaucheService } from '../embauche.service';



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  constructor(private embaucheService: EmbaucheService) { }
  cvs = this.embaucheService.getAllEmbauches();


}
