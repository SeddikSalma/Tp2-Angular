import { Personne } from './../cv/model/personne';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../cv/services/cv.service';
import { CanComponentDeactivate } from './can-deactivate.guard';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements CanComponentDeactivate {

  errorMessage = '';
  @ViewChild('formulaire', { static: true }) myForm?: NgForm;

  constructor(
    private dialog: MatDialog,
    private cvService: CvService,
    private router: Router
  ) {

  }


  createcv(item: NgForm) {
    this.cvService.addPersonne(item.value);
    this.router.navigate(['cv']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.myForm)
    console.log(this.myForm?.pending)
    console.log(this.myForm?.submitted)
    console.log(this.myForm?.pending)
    setTimeout(() => { console.log(this.myForm?.submitted); console.log(this.myForm?.pending) }, 2000)
    // TODO: Not done yet
    if (!this.myForm?.pending && this.myForm?.dirty) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '300px',
      });

      return dialogRef.afterClosed().pipe(
        map(result => {
          // If the user clicks "Yes", allow navigation; otherwise, prevent it
          return result === true;
        })
      );
    }

    return true;
  }

}
