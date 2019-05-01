import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
// font awesome css was installed by npm and imported in style.css
export class StarComponent implements OnInit {

  isFav = false
  starClass = "fa fa-star-o"
  constructor() { }

  ngOnInit() {
  }

  switchStar($event){
    $event.stopPropagation()
    console.log($event.target)
    this.isFav = !this.isFav
    this.starClass = (this.isFav)? "fa fa-star" : "fa fa-star-o"
  }

}
