import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SwalComponent, SwalPortalTargets, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('confirmDialog') confirmDialog!: SwalComponent;
  name = '';
  result = '';

  constructor(public readonly swalTargets: SwalPortalTargets) {}

  sayHello(name: string) {
    this.name = name;
  }

  cancelHello() {
    this.name = '';
  }

  async showConfirmFromCode() {
    const resp = await this.confirmDialog.fire();
    this.result = resp.isConfirmed ? 'Yes' : 'No';
  }
}
