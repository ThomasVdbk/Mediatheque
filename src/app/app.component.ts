import { Component } from '@angular/core';

import { FilmService } from './services/film.service';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mediatheque';




  constructor(private filmService: FilmService, albumService: AlbumService){}
}