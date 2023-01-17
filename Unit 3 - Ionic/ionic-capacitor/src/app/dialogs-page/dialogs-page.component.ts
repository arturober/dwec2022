import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dialogs-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './dialogs-page.component.html',
  styleUrls: ['./dialogs-page.component.scss'],
})
export class DialogsPageComponent implements OnInit {
  confirm = false;
  name = '';

  constructor() {}

  ngOnInit() {}

  async showAlert() {
    await Dialog.alert({
      title: 'Hello',
      message: 'This is an alert'
    });
  }

  async showConfirm() {
    const result = await Dialog.confirm({
      title: 'Confirm',
      message: 'Are you going to develop your next app with Ionic?'
    });

    this.confirm = result.value;
  }

  async showPrompt() {
    const result = await Dialog.prompt({
      title: 'Hello',
      message: 'What\'s your name?'
    });

    if (!result.cancelled) {
      this.name = result.value;
    }
  }
}
