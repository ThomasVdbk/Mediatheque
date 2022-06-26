import { Component } from '@angular/core';
import { UtilisateurHttpService } from './services/utilisateur-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mediatheque';

  constructor(private service: UtilisateurHttpService){}
}
