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
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Cancel</button>
        <input (keyup)="onKeyUp($event)" /> <br/>
        <input #email (keyup.enter)="inputKeyUp(email.value)" /> <br/>
        <input [(ngModel)]="name" (keyup.enter)="TwoWayBind()" />
    ` //whenever html has <courses>, template will be put inside of it
      // <button> shows class binding and style binding, active is a type of class
            //class "active" will be added to <button> when isActive=true
            //css background style can be added to <button> with isActive as well
      // <input> examples are to show event filtering, template variable and two-way binding
      // use ngModel is the recommended method approach to bind DOM value to variable
})
export class CourseComponent {
    title = "List of courses"
    courses
    isActive = true //this flag shows if the class active will be bind to button or not
                    //this can also change the style by style binding

    name = "default name"
    // This constructor works, but CourseService() is still tightly coupled
    // constructor() {
    //     let service = new CoursesService()
    //     this.courses = service.getCourses()
    // }

    //Dependency Injection means inject object in constructor 
    //inject CourseService decouple the service layer with presentation layer
    //Remember to register the service under provider in app.module.ts, or in service class, set under in @Injectable{} 
    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    onSave($event) {
        $event.stopPropagation() // stop event bubbling 
        console.log('Save button is clicked', $event)
    }

    //event triggering 
    onKeyUp($event) {
        if ($event.keyCode === 13){
            console.log($event)
            console.log($event.target)
            console.log("ENTER is pressed")
            $event.target.value = ""
        }
    }

    //this is the same as onKeyUp($event), except the keyCode check is done through event filtering
    //variable 'email' is defined in the <input #email>
    inputKeyUp(email: String) { 
        console.log(email)
        console.log(`ENTER is pressed through event filtering: ${email}`)
    }

    //Tradtionally, only model will define variable on view, changing value from view will not affect model
    //use two way binding need to import FormsModule in app.module
    //this.name is now bind to <input [(ngModel)]="name">
    //it means model and view are bind together, change one will affect the other
    TwoWayBind() {
        console.log(this.name)
    }


}