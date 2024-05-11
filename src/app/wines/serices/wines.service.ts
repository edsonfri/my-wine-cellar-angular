import { Injectable } from '@angular/core';
import { Wine } from '../model/wine';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinesService {
  private readonly API = 'https://my-wine-cellar-production.up.railway.app/myWineCellar/v1/wine';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Wine[]>(this.API)
    .pipe(
      first(),
      tap( wines => console.log(wines))
    );
  }
}
