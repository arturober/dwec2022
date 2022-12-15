import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response = '';

  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {
        title: 'Confirmation example',
        body: 'Do you want to marry me?',
      },
    });
    dialogRef.afterClosed().subscribe((resp) => {
      this.response = resp ? 'Yes' : 'No';
    });
  }
}
