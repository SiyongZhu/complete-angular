import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component'
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'followers/:userid/:username', component: GithubProfileComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'departments', component: DepartmentListComponent },
      { path: 'departments/:id', 
        component: DepartmentDetailComponent,
        children: [
          { path: 'overview', component: DepartmentOverviewComponent},
          { path: 'contact', component: DepartmentContactComponent}
        ]
      },
      { path: 'employees', component: EmployeeListComponent},
      { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, PostsComponent, GithubProfileComponent, 
  FollowersComponent, NotFoundComponent, DepartmentListComponent, EmployeeListComponent, 
  DepartmentDetailComponent, DepartmentOverviewComponent, DepartmentContactComponent]