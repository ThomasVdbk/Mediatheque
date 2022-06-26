import { TestBed } from '@angular/core/testing';

import { ProduitHttpService } from './produit-http.service';

describe('ProduitHttpService', () => {
  let service: ProduitHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
