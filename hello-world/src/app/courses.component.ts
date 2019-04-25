import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // this is CSS selector, and we want to select a courses element <courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>   
        <button class="btn btn-primary">Save</button>
    ` //whenever html has <courses>, template will be put inside of it
})
export class CourseComponent {
    title = "List of courses"
    courses

    // This constructor works, but CourseService() is still tightly coupled
    // constructor() {
    //     let service = new CoursesService()
    //     this.courses = service.getCourses()
    // }

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
}