import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Personne } from "../personne.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Personne[] = [];
  isHidden = true;

  @Input()
  onItemClick: (x: Personne) => void = () => { }

  /*   @Output()
  forwardCv = new EventEmitter(); */
  constructor() { }
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
