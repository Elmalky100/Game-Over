import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient: HttpClient) { }
  headers: any = {
    'X-RapidAPI-Key':
      'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
  getThreeGames(sort:string="",sortValue:string=""): Observable<any> {
    return this._HttpClient.get(` https://free-to-play-games-database.p.rapidapi.com/api/games${sort}${sortValue}`,{ headers: this.headers})
  }


  getgameDetails(id: number): Observable<any> {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,{ headers: this.headers,params:{'id':id} })
  }

  getAllGames(): Observable<any> {
    return this._HttpClient.get(' https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: this.headers })
  }


  getPlatformsGames(platform:string="",platformValue:string=""): Observable<any> {
    return this._HttpClient.get(` https://free-to-play-games-database.p.rapidapi.com/api/games${platform}${platformValue}`,{ headers: this.headers})
  }
  
  getsortGames(sort:string="",sortValue:string=""): Observable<any> {
    return this._HttpClient.get(` https://free-to-play-games-database.p.rapidapi.com/api/games${sort}${sortValue}`,{ headers: this.headers})
  }
  
  getcategoryGames(category:string="",categoryValue:string=""): Observable<any> {
    return this._HttpClient.get(` https://free-to-play-games-database.p.rapidapi.com/api/games${category}${categoryValue}`,{ headers: this.headers})
  }
  
}