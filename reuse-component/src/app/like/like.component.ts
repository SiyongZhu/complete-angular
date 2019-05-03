import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') _count: number
  @Input('isActive') _highlighted: boolean


  constructor() { 
    this._count = 0
  }

  ngOnInit() {
  }

  onClick(){
    this._count += (this._highlighted)? -1:1
    this._highlighted = !this._highlighted
  }



}
