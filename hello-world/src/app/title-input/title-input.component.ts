import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {
  movieTitle: String = ""
  title: String
  constructor() { }

  ngOnInit() {
  }

  InputMovieTitle($event) {
    this.movieTitle = $event.target.value
  }

}
