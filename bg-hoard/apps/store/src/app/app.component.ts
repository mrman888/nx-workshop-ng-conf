import { Component, Pipe, PipeTransform } from '@angular/core';
import { getAllGames } from '../fake-api';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}

@Pipe({ name: 'formatRating' })
export class FormatRating implements PipeTransform {
  transform(x: number): string {
    return formatRating(x);
  }
}
