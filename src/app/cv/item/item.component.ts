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

  @Input({
    required: true
  })
  onClickHandler: (x: Personne) => void = () => { }

  @Output()
  selectCv = new EventEmitter<Personne>();

  onSelectCv() {
    if (this.cv) this.onClickHandler(this.cv)
    // this.cvService.selectCv(this.cv);
  }
}
