import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sec04BasicComponent } from './sec04-basic/sec04-basic.component';
import { HomeComponent } from './home/home.component';
import { Sec05UtilitiesComponent } from './sec05-utilities/sec05-utilities.component';
import { Sec06FormComponent } from './sec06-form/sec06-form.component';
import { Sec07FlexboxComponent } from './sec07-flexbox/sec07-flexbox.component';
import { Sec07NavbarComponent } from './sec07-navbar/sec07-navbar.component';


const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: '04', component: Sec04BasicComponent },
      { path: '05', component: Sec05UtilitiesComponent},
      { path: '06', component: Sec06FormComponent},
      { path: '07-flex', component: Sec07FlexboxComponent},
      { path: '07-navbar', component: Sec07NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, Sec04BasicComponent, Sec05UtilitiesComponent,
                                  Sec06FormComponent, Sec07FlexboxComponent, Sec07NavbarComponent];
