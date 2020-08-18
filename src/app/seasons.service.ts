import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeasonsData } from './iseasons-data';
import { ISeasons } from './iseasons';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private httpClient: HttpClient) { }

  getSeasons() {
    return this.httpClient.get<ISeasonsData>(`http://api.tvmaze.com/shows/${uriParams}/seasons`);
    /*.pipe(map(data => this.transformToISeasons(data)))*/
  }
    transformToISeasons(data: ISeasonsData): ISeasons {
    return {
      seasonsId: data.id,
      seasonsUrl: `http://api.tvmaze.com/shows/${seasonsId}/seasons`,
      seasonsNumber: data.number,
      episodeOrder: data.episodeOrder,
      seasonsImage: `http://api.tvmaze.com/shows/${seasonsId}/images`
    }
  }
}
