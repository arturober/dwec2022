import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating!: number;
  @Output() changed = new EventEmitter<number>();
  auxRating!: number;
  icons = {
    faStarSolid,
    faStarRegular,
  };

  ngOnInit(): void {
    this.auxRating = this.rating;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.auxRating = this.rating;
  }

  setRating(newRating: number) {
    this.changed.emit(newRating);
  }
}
