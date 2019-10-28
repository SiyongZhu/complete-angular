import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number
  constructor(private route: ActivatedRoute, private router: Router, 
    private departmentService: DepartmentService) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')) //this will only not get updated
    // this.departmentId = id
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'))
      this.departmentId = id
    })
  }

  goPrevious(){
    let previousId = this.departmentId-1;
    this.router.navigate(["/departments", previousId])
  }

  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(["/departments", nextId])
  }

  gotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null
    // this.router.navigate(['/departments', {id: selectedId}]) //returns an optional route parameter, used in department-list
    this.router.navigate(['../', {id: selectedId}])
  }

  getOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  getContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
