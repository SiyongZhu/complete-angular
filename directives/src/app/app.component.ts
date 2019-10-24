import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  buttonLeftMargin = "0.5em"
  isSelected:boolean = false
  courses = []
  viewMode = 'map'
  canSave:boolean = true

  task={
    title: 'Review',
    assignee: null
  }

  onAdd(){
    this.courses.push({ id: 4, name: 'course4' })
  }

  onRemove(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ]
  }

  trackCourse(index, course){
    //this function defines how angular track objects, 
    //if a course obj exists, it will track changes on course id
    return course ? course.id: undefined
  }

  onClick(){
    this.isSelected = !this.isSelected
  }
}
