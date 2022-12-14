import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from
'@angular/material/dialog';


@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
})
export class ModalConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalConfirmComponent>
  ) { }
}
