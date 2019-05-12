import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

    categories = [
      {id:1, name:"Development"},
      {id:2, name:"Art"},
      {id:3, name:"Language"}
    ]

    submit(x){
      console.log(x)
    }

}
