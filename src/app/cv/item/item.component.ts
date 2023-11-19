import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Personne } from "../model/personne";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // Before input item()
  // After input item(cv: Cv)
  @Input({
    required: true,
  })
  cv: Personne | null = null;
  @Output()
  selectCv = new EventEmitter<Personne>();
  constructor(private cvService: CvService) {}
  onSelectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
