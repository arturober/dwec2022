import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './action-sheet-page.component.html',
  styleUrls: ['./action-sheet-page.component.scss'],
})
export class ActionSheetPageComponent {
  option = -1;

  async showActions() {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
        {
          title: 'Cancel',
          style: ActionSheetButtonStyle.Cancel
        }
      ]
    });

    this.option = result.index;
  }
}
