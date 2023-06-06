import { Component ,OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game'

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit {
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {}
  isloading: boolean = false;
  SortsGames: Game[] = [];
  sort:string="?sort-by=";
  sortValue:any="";
  count:number =20
  x: number = 20
  ngOnInit(): void {
    this.isloading = true
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.sortValue = params.get('value');
     console.log(this.sortValue)
     this._GamesService.getsortGames(this.sort,this.sortValue).subscribe(
      (response) => {
        console.log(response.slice(0, this.x)),
          this.SortsGames = response.slice(0, this.x)
          this.isloading= false;
      });
    })
  

  
  }
  addMoreGames() {
    this.isloading = true
    this.x += 20
    this._GamesService.getsortGames(this.sort,this.sortValue).subscribe({
      next: (response) => {
        this.SortsGames = response.slice(0, this.x)
        console.log(response.slice(0, this.x))
        this.isloading= false;
      }
    })
  }


}
 