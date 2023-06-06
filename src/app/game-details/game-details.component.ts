import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {

  }
  isloading: boolean = false;
  gameDetailes: any;
  gameId: any;
  ngOnInit(): void {
    this.isloading = true
    this._ActivatedRoute.paramMap.subscribe((params) =>
      this.gameId = params.get('id'));

    this._GamesService.getgameDetails(this.gameId).subscribe({
      next: (response) => {
        console.log(response),
        this.gameDetailes = response
        this.isloading = false
      },
      error: (err) => {
        console.log(err)
        this.isloading = false
      }
    }
    );

  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    smartSpeed: 10,
    autoplaySpeed: 200,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}


