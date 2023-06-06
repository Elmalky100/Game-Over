import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count:number =3
  isloading: boolean = false;
  Games: any[] = []
  sort:string="?sort-by=";
  sortValue:any="popularity";
  constructor(private _GamesService: GamesService) { }
   ngOnInit(): void {
    this.isloading = true
    this._GamesService.getThreeGames(this.sort,this.sortValue).subscribe({
      next: (response) => {
        this.Games = response.slice(0,3),
          console.log(response)
          this.isloading= false;
      }

    })
   }
}
