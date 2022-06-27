import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Film from '../models/film.model';

const apiUrl = `${environment.API_URL}films`

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // definir l'Attribut où se trouve les data (private jsonServUrl="http//localhost:3000";)
  // Pour ma part, déjà définit dans une constante d'environment (environment/environment.ts)
  constructor(private httpClient: HttpClient) { }

  // creation des fonctions CRUD via requete http
  public getFilms(): Observable<Film[]> {
    return this.httpClient.get<any[]>(apiUrl)
  }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${apiUrl}/${id}`)
  }

  createFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(apiUrl, film)
  }

  uptdateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${apiUrl}/${film.id}`, film)  // le , film va mettre à jour le {film.id}
  }

  deleteFilm(id: number): Observable<Film> { //Observable permet de voir la donnée avant de supprimer
    return this.httpClient.delete<Film>(`${apiUrl}/${id}`)
  }

}
