import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  course: any
  text: String 

  constructor() { 
    this.course = {
      title: "Complete Angular Course",
      rating: 4.9564,
      students: 32564,
      price: 190.05,
      releaseDate: new Date(2018, 1, 4)
    }
    this.text = `
    this is a summary example, I am typing some random values, but hopefully this will work as fine, or not, ZI don't know
    but I like to use those meaningless words to run test
    `
  }

  ngOnInit() {
  }

}
