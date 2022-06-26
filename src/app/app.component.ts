import { Component } from '@angular/core';
import { ProduitHttpService } from './services/produit-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mediatheque';

  constructor(private service: ProduitHttpService){}
}
