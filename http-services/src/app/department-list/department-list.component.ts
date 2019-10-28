import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../services/department.service';
import { IDepartment } from '../models/department';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>
  Department List
  </h3>
  <ul class="list-group">
    <li (click)="onSelect(dep)" class="list-group-item" [className]="isSelected(dep)? 'fa fa-hand-o-right' : ''" *ngFor="let dep of departments">
      <span class="bandge">{{dep.id}}</span>  {{dep.name}}
    </li>
  </ul>
  `
})
export class DepartmentListComponent implements OnInit {

  public departments: IDepartment[];
  public selectedId: number;

  constructor(private router: Router, private route: ActivatedRoute,
              private departmentService: DepartmentService ) { }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe(data => this.departments = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department): boolean {
    return department.id === this.selectedId;
  }



}
