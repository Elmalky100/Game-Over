import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {

  }
  isloading: boolean = false;
  categoryGames: Game[] = [];
  category:string="?category=";
  categoryValue:any="";
  count:number =20
  countArray:any[]=[]
  x: number = 20
  ngOnInit(): void {
    this.isloading = true
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.categoryValue = params.get('value');
     console.log(this.categoryValue)
     this._GamesService.getcategoryGames(this.category,this.categoryValue).subscribe(
      {
        next:(response) => {
          console.log(response.slice(0, this.x)),
            this.categoryGames = response.slice(0, this.x)
            this.isloading= false;
        }
      });
      
      
    })
  

  
  }
  addMoreGames() {
    this.isloading = true
    this.x += 20
    this._GamesService.getcategoryGames(this.category,this.categoryValue).subscribe({
      next: (response) => {
        this.categoryGames = response.slice(0, this.x)
        console.log(response.slice(0, this.x))
        this.isloading= false;
      }
    })
  }
}


