import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MarvelResponse } from './marvel-response';
import { Observable } from 'rxjs';
import { EnvironmentService } from './configs/environment.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private url: string = '/v1/public/characters';

  constructor(
    private env: EnvironmentService,
    private httpClient: HttpClient,
  ) {}

  getHeroes(): Observable<MarvelResponse> {
    const url = `${this.env.marvelUrl}${this.url}?apikey=${this.env.publicKey}`;

    return this.httpClient.get<MarvelResponse>(url);
  }
}
