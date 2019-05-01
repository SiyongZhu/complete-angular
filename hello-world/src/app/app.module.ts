import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SummaryPipe } from './pipe-example/summary.pipe';
import { StarComponent } from './star/star.component';
import { TitleInputComponent } from './title-input/title-input.component';
import { ConvertPipe } from './title-input/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    PipeExampleComponent,
    SummaryPipe,
    StarComponent,
    TitleInputComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService //register the class, so CourseService injects into courseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
