import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sec04BasicComponent } from './sec04-basic/sec04-basic.component';
import { HomeComponent } from './home/home.component';
import { Sec05UtilitiesComponent } from './sec05-utilities/sec05-utilities.component';
import { Sec06FormComponent } from './sec06-form/sec06-form.component';
import { Sec07FlexboxComponent } from './sec07-flexbox/sec07-flexbox.component';
import { Sec07NavbarComponent } from './sec07-navbar/sec07-navbar.component';
import { Sec08GridComponent } from './sec08-grid/sec08-grid.component';
import { Sec08FormgridComponent } from './sec08-formgrid/sec08-formgrid.component';
import { Sec09ListGroupsComponent } from './sec09-list-groups/sec09-list-groups.component';
import { Sec09CardComponent } from './sec09-card/sec09-card.component';


const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: '04', component: Sec04BasicComponent },
      { path: '05', component: Sec05UtilitiesComponent},
      { path: '06', component: Sec06FormComponent},
      { path: '07-flex', component: Sec07FlexboxComponent},
      { path: '07-navbar', component: Sec07NavbarComponent},
      { path: '08-grid', component: Sec08GridComponent},
      { path: '08-formgrid', component: Sec08FormgridComponent},
      { path: '09-listgroup', component: Sec09ListGroupsComponent},
      { path: '09-card', component: Sec09CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, Sec04BasicComponent, Sec05UtilitiesComponent,
                                  Sec06FormComponent, Sec07FlexboxComponent, Sec07NavbarComponent,
                                  Sec08GridComponent, Sec08FormgridComponent, Sec09ListGroupsComponent,
                                  Sec09CardComponent
                                ];
