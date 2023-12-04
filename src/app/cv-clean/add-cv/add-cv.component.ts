import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.guard';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CvService } from '../cv.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements CanComponentDeactivate {

  errorMessage = '';
  @ViewChild('formulaire', { static: true }) myForm?: NgForm;
  private dialog: MatDialog = inject(MatDialog)
  private cvService: CvService = inject(CvService)
  private router: Router = inject(Router)
  private toastr: ToastrService = inject(ToastrService)

  constructor() { }

  createcv(item: NgForm) {
    this.cvService.addPersonne(item.value).pipe(
      catchError(() => {
        return of(false)
      }),
      tap((resp) => {
        if (resp) {
          this.toastr.success("Added!")
        } else {
          this.toastr.error("Error adding element!")
        }
        this.router.navigate(['cv']);
      }),
    ).subscribe()
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.myForm?.submitted && this.myForm?.dirty) {
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
