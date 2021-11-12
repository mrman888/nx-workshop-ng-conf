import { Component, Pipe, PipeTransform } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.http.get<any[]>('/api/games');
}

@Pipe({ name: 'formatRating' })
export class FormatRating implements PipeTransform {
  transform(x: number): string {
    return formatRating(x);
  }
}
