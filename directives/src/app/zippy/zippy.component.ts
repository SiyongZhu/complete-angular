import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input("title") title: string
  isExpanded: boolean = false

  constructor() { 
  }

  ngOnInit() {
  }

  onExpand(){
    this.isExpanded = !this.isExpanded
    console.log("is expanding")
  }

}
