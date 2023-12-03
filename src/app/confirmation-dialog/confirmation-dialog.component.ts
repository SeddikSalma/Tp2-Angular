import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Confirmation</h2>
    <mat-dialog-content>
      Êtes-vous sûr de vouloir quitter la page sans enregistrer les modifications ?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Non</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Oui</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}
}
