import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Album from '../models/album.model';

const apiUrl = `${environment.API_URL}albums`

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  // definir l'Attribut où se trouve les data (private jsonServUrl="http//localhost:3000";)
  // Pour ma part, déjà définit dans une constante d'environment (environment/environment.ts)
  constructor(private httpClient: HttpClient) { }

  // creation des fonctions CRUD via requete http
  public getAlbums(): Observable<Album[]> {
    return this.httpClient.get<any[]>(apiUrl)
  }

  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${apiUrl}/${id}`)
  }

  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(apiUrl, album)
  }

  uptdateAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(`${apiUrl}/${album.id}`, album)  // le ,album va mettre à jour le {album.id}
  }

  deleteAlbum(id: number): Observable<Album> { //Observable permet de voir la donnée avant de supprimer
    return this.httpClient.delete<Album>(`${apiUrl}/${id}`)
  }
}
