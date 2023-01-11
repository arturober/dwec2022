import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buttons', url: '/buttons', icon: 'apps' },
    { title: 'Cards', url: '/cards', icon: 'albums' },
    { title: 'Inputs', url: '/inputs', icon: 'text' },
    { title: 'Lists', url: '/list', icon: 'list' },
];
  constructor(public environmentInjector: EnvironmentInjector) {}
}
