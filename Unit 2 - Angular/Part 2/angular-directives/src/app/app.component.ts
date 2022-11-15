import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForGroupDirective } from './directives/for-group.directive';
import { SetColorDirective } from './directives/set-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, SetColorDirective, FormsModule, ForGroupDirective]
})
export class AppComponent {
  color = 'yellow';
  num = 3;

  names = ["Peter", "Mary", "Ann", " George", "Lisa", "Bart", "Homer", "Apu", "Maggie"];
}
