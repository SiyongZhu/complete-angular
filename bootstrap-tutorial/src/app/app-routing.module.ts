import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sec04BasicComponent } from './sec04-basic/sec04-basic.component';
import { HomeComponent } from './home/home.component';
import { Sec05UtilitiesComponent } from './sec05-utilities/sec05-utilities.component';


const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: '04', component: Sec04BasicComponent },
      { path: '05', component: Sec05UtilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, Sec04BasicComponent, Sec05UtilitiesComponent];
