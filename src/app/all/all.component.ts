import { Component } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  count:number =20
  isloading: boolean = false;
  AllGames: any[] = []
  x: number = 20
  constructor(private _GamesService: GamesService) { }
  ngOnInit(): void {
    this.isloading = true
    this._GamesService.getAllGames().subscribe({
      next: (response) => {
        this.AllGames = response.slice(0, this.x),
          console.log(response)
          this.isloading= false;
      }
    })
  }

  addMoreGames() {
    this.isloading = true
    this.x += 20
    this._GamesService.getAllGames().subscribe({
      next: (response) => {
        this.AllGames =response.slice(0,this.x)
        console.log(response.slice(0,this.x))
        this.isloading= false;
      }
    })
  }
}
