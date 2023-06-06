import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game'
@Component({
  selector: 'app-plat-forms',
  templateUrl: './plat-forms.component.html',
  styleUrls: ['./plat-forms.component.css']
})
export class PlatFormsComponent implements OnInit {
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {

  }
  isloading: boolean = false;

  PlatformsGames: Game[] = [];
  platform:string="?platform=";
  platformValue:any="";
  count:number =20
  x: number = 20
  ngOnInit(): void {
    this.isloading = true
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.platformValue = params.get('value');
     console.log(this.platformValue)
     this._GamesService.getPlatformsGames(this.platform,this.platformValue).subscribe(
      (response) => {
        console.log(response.slice(0, this.x)),
          this.PlatformsGames = response.slice(0, this.x)
          this.isloading= false;
      });
    })
  

  
  }
  addMoreGames() {
    this.isloading = true
    this.x += 20
    this._GamesService.getPlatformsGames(this.platform,this.platformValue).subscribe({
      next: (response) => {
        this.PlatformsGames = response.slice(0, this.x)
        console.log(response.slice(0, this.x))
        this.isloading= false;
      }
    })
  }
}
