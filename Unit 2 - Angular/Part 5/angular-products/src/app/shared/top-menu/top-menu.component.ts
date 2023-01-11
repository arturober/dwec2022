import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbCollapse],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
  title = 'Angular Products';
  isMenuCollapsed = true;

}
