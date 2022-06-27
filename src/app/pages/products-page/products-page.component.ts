import { Component, OnInit } from '@angular/core';
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {


  // declaration de la liste de films et albums qui ont besoin de model(plan de fabrication TimeScript) et service(contient les fonctions permettant d'y acceder)
  films: Film[] = [];
  albums: Album[] = [];


  constructor(private filmService: FilmService, private albumService: AlbumService) { } // on vient se brancher sur film.service.ts


  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => { this.films = films });
    this.albumService.getAlbums().subscribe((albums) => { this.albums = albums });
  }

  addFilm(film: any) {
    this.films.push(film);
  }

  addAlbum(album: any) {
    this.albums.push(album);
  }

}
